import { useLocation, useNavigate } from "react-router-dom";
import ActionTab from "../../components/ActionTab/ActionTab";
import DatabaseSearchDropdown from "../../components/DatabaseSearchDropdown/DatabaseSearchDropdown";
import searchIcon from "../../asset/images/search_icon_white.svg";
import _searchIcon from "../../asset/images/search_icon.svg";
import person1 from "../../asset/person1.svg";
import "./Investigation.css";
import { useState } from "react";
import DropdownLayout from "../../components/DropdownLayout/DropdownLayout";
import Biocard from "./component/Biocard";

function Investigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const tabData = ["All", "Lorem", "Lorem", "Lorem", "Lorem"];
  const [searchUsername, setSearchUsername] = useState("");

  const handleTab = (_tab) => {
    query.set("investigation_tab", _tab);
    navigate({
      pathname: location.pathname,
      search: query.toString(),
    });
  };

  return (
    <>
      <div className="investigationRoot">
        <div className="investigationHeaderRoot">
          <div>
            <div className="investigationHeaderTitle">Investigation</div>
            <ActionTab
              className="investigationHeaderTab"
              data={tabData}
              onSelect={(e) => handleTab(e)}
              select={
                query.get("investigation_tab") === null
                  ? tabData[0]
                  : query.get("investigation_tab")
              }
            />
          </div>
        </div>
        <div className="investigationContent">
          <div className="investigationContent1">
            <DatabaseSearchDropdown
              content="Cases"
              select="All"
              className="dropdown"
              type="keyword"
            />
            <div className="inputRoot">
              <img src={searchIcon} alt="search_icon" />
              <input
                placeholder="Enter username..."
                value={searchUsername}
                onChange={(e) => setSearchUsername(e.target.value)}
              />
              <div className="divline"></div>
              <DropdownLayout
                className="searchDropdown"
                dropRoot={
                  <div className="dropRoot">
                    <div className="dropItem">Lorem ipsum</div>
                    <div className="dropItem">Lorem ipsum</div>
                    <div className="dropItem">Lorem ipsum</div>
                    <div className="dropItem">Lorem ipsum</div>
                    <div className="topRightArrow"></div>
                  </div>
                }
                dropRootStyle="dropdownRoot"
              >
                Last 15 Days <i className="fas fa-caret-down"></i>
              </DropdownLayout>
              <div className="divline"></div>
              <div className="searchBtn">
                <img src={_searchIcon} alt="search_icon" />
              </div>
            </div>
          </div>
          <div className="investigationContent2">
            <div className="userAnalsysRoot">
              <div className="headerRoot">
                <div className="title">User analysis</div>
                <div className="viewDetail">
                  View Details <i className="fas fa-chevron-right"></i>
                </div>
              </div>
              <div className="nameRoot">
                <div className="front">
                  <img src={person1} alt="person" />
                  <div>
                    <div className="name">Victor Vance</div>
                    <div className="socialnameRoot">
                      <i className="fab fa-twitter"></i>
                      @vectorvance
                    </div>
                  </div>
                </div>
                <div className="end">
                  <i className="fas fa-map-marker-alt"></i>
                  New York, USA
                </div>
              </div>
              <div className="bio">Bio</div>
              <div className="bioRoot">
                <div className="itemRoot">
                  <Biocard
                    title="Followers"
                    count="204"
                    des="(178 last week)"
                    countDes={
                      <div className="biocardDes">
                        <i className="fas fa-caret-up"></i>105.23 %
                      </div>
                    }
                  />
                  <Biocard
                    title="Followers"
                    count="204"
                    des="(178 last week)"
                    countDes={
                      <div className="biocardDes">
                        <i className="fas fa-caret-up"></i>105.23 %
                      </div>
                    }
                  />
                  <Biocard
                    title="Followers"
                    count="204"
                    des="(178 last week)"
                    countDes={
                      <div className="biocardDes">
                        <i className="fas fa-caret-up"></i>105.23 %
                      </div>
                    }
                  />
                </div>
                <div className="itemRoot">
                  <Biocard
                    title="Followers"
                    count="204"
                    des="(178 last week)"
                    countDes={
                      <div className="biocardDes">
                        <i className="fas fa-caret-up"></i>105.23 %
                      </div>
                    }
                  />
                  <Biocard
                    title="Followers"
                    count="204"
                    des="(178 last week)"
                    countDes={
                      <div className="biocardDes">
                        <i className="fas fa-caret-up"></i>105.23 %
                      </div>
                    }
                  />
                  <Biocard
                    title="Followers"
                    count="204"
                    des="(178 last week)"
                    countDes={
                      <div className="biocardDes">
                        <i className="fas fa-caret-up"></i>105.23 %
                      </div>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Investigation;
