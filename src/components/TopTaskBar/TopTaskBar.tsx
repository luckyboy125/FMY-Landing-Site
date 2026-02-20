import { useCallback } from 'react';
import { Col, Row } from 'react-bootstrap';
import SearchLogo from '../../asset/sidebar/SearchLogo.svg';
import './TopTaskBar.css';

function TopTaskBar(): JSX.Element {
  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
  }, []);

  return (
    <div className="topTaskBar">
      <div className="topTaskBarContent">
        <Row>
          <Col>
            <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
              <input
                placeholder="Search Here..."
                className="searchInput"
                aria-label="Search"
              />
              <img src={SearchLogo} alt="" className="searchLogo" />
            </form>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default TopTaskBar;
