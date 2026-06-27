import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('JavaScript');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleReview = async () => {
    if (!code.trim()) {
      setError('Please paste or write some code first!');
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      // Connects directly to our Node.js backend on port 5000
      const response = await axios.post('http://localhost:5000/api/review', {
        code,
        language,
      });

      if (response.data.success) {
        setResult(response.data.data);
      } else {
        setError('Failed to get a structured review.');
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Server error. Make sure your backend is running!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: '24px', backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh' }}>
      <header style={{ marginBottom: '32px', borderBottom: '1px solid #334155', paddingBottom: '16px' }}>
        <h1 style={{ margin: 0, fontSize: '28px', color: '#38bdf8' }}>⚡ DeepReview AI</h1>
        <p style={{ margin: '8px 0 0 0', color: '#94a3b8' }}>Automated QA & Code Optimization Protocol</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        {/* Left Panel: Input Area */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <label style={{ fontWeight: 'bold' }}>Input Source Code</label>
            <select 
              value={language} 
              onChange={(e) => setLanguage(e.target.value)}
              style={{ padding: '4px 8px', borderRadius: '4px', backgroundColor: '#1e293b', color: '#fff', border: '1px solid #475569' }}
            >
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="Java">Java</option>
            </select>
          </div>
          <textarea
            rows="20"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Paste your code snippet here..."
            style={{ width: '100%', padding: '16px', boxSizing: 'border-box', backgroundColor: '#1e293b', color: '#f1f5f9', border: '1px solid #334155', borderRadius: '8px', fontFamily: 'monospace', fontSize: '14px', resize: 'vertical' }}
          />
          <button
            onClick={handleReview}
            disabled={loading}
            style={{ width: '100%', marginTop: '16px', padding: '12px', backgroundColor: loading ? '#64748b' : '#0284c7', color: '#fff', border: 'none', borderRadius: '8px', cursor: loading ? 'not-allowed' : 'pointer', fontWeight: 'bold', fontSize: '16px' }}
          >
            {loading ? 'Analyzing Codebases...' : 'Execute Architecture Analysis'}
          </button>
          {error && <p style={{ color: '#ef4444', marginTop: '12px' }}>⚠️ {error}</p>}
        </div>

        {/* Right Panel: Output Analysis */}
        <div style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '8px', border: '1px solid #334155', overflowY: 'auto', maxHeight: '80vh' }}>
          <h2 style={{ margin: '0 0 16px 0', fontSize: '20px', color: '#38bdf8' }}>Analysis Matrix</h2>
          
          {!result && !loading && (
            <p style={{ color: '#64748b', textAlign: 'center', marginTop: '100px' }}>Await execution analysis. Paste code and trigger analysis protocol.</p>
          )}

          {loading && (
            <p style={{ color: '#94a3b8', textAlign: 'center', marginTop: '100px' }}>Evaluating tokens, security parameters, and testing criteria...</p>
          )}

          {result && (
            <div>
              <h3 style={{ color: '#fbbf24', fontSize: '16px' }}>1. Automated Code Review</h3>
              <p style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6', fontSize: '14px', color: '#cbd5e1' }}>{result.review}</p>
              
              <hr style={{ borderColor: '#334155', margin: '24px 0' }} />
              
              <h3 style={{ color: '#34d399', fontSize: '16px' }}>2. Optimizations & Refactoring</h3>
              <pre style={{ backgroundColor: '#0f172a', padding: '12px', borderRadius: '6px', overflowX: 'auto', color: '#a7f3d0', fontSize: '13px' }}>
                <code>{result.optimizations}</code>
              </pre>

              <hr style={{ borderColor: '#334155', margin: '24px 0' }} />

              <h3 style={{ color: '#60a5fa', fontSize: '16px' }}>3. Automated Jest Unit Tests</h3>
              <pre style={{ backgroundColor: '#0f172a', padding: '12px', borderRadius: '6px', overflowX: 'auto', color: '#bfdbfe', fontSize: '13px' }}>
                <code>{result.unitTests}</code>
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;