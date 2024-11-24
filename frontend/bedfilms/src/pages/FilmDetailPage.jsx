import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/FilmDetailPage.css';

const films = [
  { id: 1, name: "Криминальное чтиво", description: "Двое бандитов Винсент Вега и Джулс Винфилд проводят время в философских беседах в перерыве между разборками и «решением проблем» с должниками своего криминального босса Марселласа Уоллеса. Параллельно разворачивается три истории.", cover: "cover1.jpg", videoUrl: "video1.mp4" },
  { id: 2, name: "Бешеные псы", description: "Это должно было стать идеальным преступлением. Задумав ограбить ювелирный магазин, криминальный босс Джо Кэбот собрал вместе шестерых опытных и совершенно незнакомых друг с другом преступников. Но с самого начала все пошло не так, и обычный грабеж превратился в кровавую бойню.", cover: "cover2.jpg", videoUrl: "video2.mp4" },
  { id: 3, name: "Интерстеллар", description: "Наше время на Земле подошло к концу, команда исследователей берет на себя самую важную миссию в истории человечества; путешествуя за пределами нашей галактики, чтобы узнать есть ли у человечества будущее среди звезд.", cover: "cover3.jpg", videoUrl: "video3.mp4" },
];


const FilmDetailPage = () => {
  const { id } = useParams(); 
  const film = films.find((film) => film.id === parseInt(id));
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [user, setUser] = useState({ username: '', avatar: '' });

  useEffect(() => {
    if (film) {
      const savedComments = JSON.parse(localStorage.getItem(`comments_${film.id}`)) || [];
      setComments(savedComments);
    }
  }, [film]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleAddComment = () => {
    if (newComment.trim() && user.username) {
      const updatedComments = [
        ...comments,
        { id: Date.now(), avatar: user.avatar, username: user.username, text: newComment }
      ];
      setComments(updatedComments);
      localStorage.setItem(`comments_${film.id}`, JSON.stringify(updatedComments));
      setNewComment('');
    }
  };

  const handleDeleteComment = (commentId) => {
    const updatedComments = comments.filter(comment => comment.id !== commentId);
    setComments(updatedComments);
    localStorage.setItem(`comments_${film.id}`, JSON.stringify(updatedComments));
  };

  if (!film) {
    return <div>Фильм не найден</div>;
  }

  return (
    <div>
      <Navbar />
    <div className="film-detail-page">
  <div className="film-content">
    <div className="video-section">
      <video controls className="film-player">
        <source src={film.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="film-info">
        <h2>{film.name}</h2>
        <p>{film.description}</p>
      </div>
    </div>
    <div className="comments-section">
      <h3>Комментарии</h3>
      <div className="comments-list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <img
              src={comment.avatar}
              alt="Avatar"
              className="comment-avatar"
            />
            <div className="comment-content">
              <h4>{comment.username}</h4>
              <p>{comment.text}</p>
            </div>
            {comment.username === user.username && (
              <button
                className="delete-comment-button"
                onClick={() => handleDeleteComment(comment.id)}
              >
                ×
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="add-comment">
        <textarea
          placeholder="Оставьте комментарий"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={handleAddComment}>Отправить</button>
      </div>
    </div>
  </div>
</div>
<Footer />
</div>

  );
};

export default FilmDetailPage;
