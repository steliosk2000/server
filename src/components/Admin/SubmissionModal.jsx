import styles from './Admin.module.css';

const SubmissionModal = ({ submission, onUpdateStatus, onDelete, onClose }) => {
  if (!submission) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2>Lead Information</h2>
          <span style={{ 
            background: submission.status === 'RESOLVED' ? '#dcfce7' : '#fef9c3', 
            color: submission.status === 'RESOLVED' ? '#166534' : '#854d0e',
            padding: '4px 12px', borderRadius: '12px', fontWeight: 'bold'
          }}>
            {submission.status}
          </span>
        </div>

        <div style={{ marginBottom: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <div><strong>Name:</strong> {submission.name}</div>
          <div><strong>Service Interest:</strong> {submission.serviceName}</div>
          <div><strong>Email:</strong> <a href={`mailto:${submission.email}`}>{submission.email}</a></div>
          <div><strong>Phone:</strong> {submission.phone || '-'}</div>
          <div><strong>Company / Domain:</strong> {submission.domain || '-'}</div>
          <div><strong>Submitted:</strong> {new Date(submission.createdAt).toLocaleString()}</div>
        </div>

        <div style={{ background: '#f8fafc', padding: '15px', borderRadius: '6px', whiteSpace: 'pre-wrap', marginBottom: '25px' }}>
          <strong>Message & Scope:</strong><br/><br/>
          {submission.message}
        </div>

        <div className={styles.modalActions} style={{ justifyContent: 'space-between' }}>
          <button onClick={() => onDelete(submission.id)} className={styles.actionBtn} style={{ background: '#ef4444' }}>
            Delete Lead
          </button>
          <div style={{ display: 'flex', gap: '10px' }}>
            {submission.status !== 'RESOLVED' && (
              <button 
                onClick={() => onUpdateStatus(submission.id, 'RESOLVED')} 
                className={styles.saveBtn} 
                style={{ background: '#10b981' }}
              >
                Mark as Resolved
              </button>
            )}
            {submission.status === 'RESOLVED' && (
              <button 
                onClick={() => onUpdateStatus(submission.id, 'PENDING')} 
                className={styles.saveBtn} 
                style={{ background: '#f59e0b' }}
              >
                Re-open to Pending
              </button>
            )}
            <button onClick={onClose} className={styles.cancelBtn}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmissionModal;

