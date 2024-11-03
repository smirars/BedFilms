import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/FilmDetailPage.css';

const FilmDetailPage = () => {
  const { state } = useLocation();
  const { film } = state || {};
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [user, setUser] = useState({ username: '', avatar: '' });

  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem(`comments_${film.id}`)) || [];
    setComments(savedComments);
  }, [film.id]);

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

  return (
    <div className="film-detail-page">
      <Navbar />
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
            {comments.map(comment => (
              <div key={comment.id} className="comment">
                <img src={comment.avatar} alt="Avatar" className="comment-avatar" />
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
  );
};

export default FilmDetailPage;
