import { useCallback } from 'react';
import { Col, Row } from 'react-bootstrap';
import SearchLogo from '../../asset/sidebar/SearchLogo.svg';
import './TopTaskBar.css';

function TopTaskBar() {
  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
  }, []);

  return (
    <div className="top-task-bar">
      <div className="top-task-bar__content">
        <Row>
          <Col>
            <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
              <input
                placeholder="Search Here..."
                className="top-task-bar__search-input"
                aria-label="Search"
              />
              <img src={SearchLogo} alt="" className="top-task-bar__search-logo" />
            </form>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default TopTaskBar;
