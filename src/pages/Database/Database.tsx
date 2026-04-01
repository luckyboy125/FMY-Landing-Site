import { useEffect, useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DatabaseInput from './component/DatabaseInput/DatabaseInput';
import LetterSelectButton from './component/LetterSelectButton/LetterSelectButton';
import ColorBtn from '../../components/ColorBtn/ColorBtn';
import ActionTab from '../../components/ActionTab/ActionTab';
import ThreeDotBtn from '../../components/ThreeDotBtn/ThreeDotBtn';
import CustomizeTable from '../../components/CustomizeTable/CustomizeTable';
import DatabaseSearchDropdown from '../../components/DatabaseSearchDropdown/DatabaseSearchDropdown';
import person3 from '../../asset/person3.svg';
import tiktok from '../../asset/images/social/tiktok.svg';
import refresh from '../../asset/images/refresh_icon.svg';
import youtube from '../../asset/images/social/youtube.svg';
import twitter from '../../asset/images/social/twitter.svg';
import facebook from '../../asset/images/social/facebook.svg';
import tableAlertIcon from '../../asset/images/alert_icon.svg';
import instagram from '../../asset/images/social/instagram.svg';
import searchIcon from '../../asset/images/search_icon_white.svg';
import './Database.css';

interface DatabaseTableRow {
  item: string;
  user: string;
  addeddate: string;
  addbyuser: { name: string; image: string };
  case: string;
  priority: string;
  view: { alert: boolean };
}

function Database() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);

  const [url, setUrl] = useState('Add URL of: post, user, website...');
  const [comment, setComment] = useState('Add a comment here...');
  const [cases, setCases] = useState('Add a case here...');
  const [tableSearch, setTableSearch] = useState('');
  const [mockTableData, setMockTableData] = useState<DatabaseTableRow[]>([]);
  const [advancedToolBtn, setAdvancedToolBtn] = useState(false);
  const firstLetterSelect = ['User', 'Post', 'URL'];
  const [firstLetter, setFirstLetter] = useState(firstLetterSelect[0]);
  const secondLetterSelect = ['Content', 'Comment'];
  const [secondLetter, setSecondLetter] = useState(secondLetterSelect[0]);

  const tabData = [
    'All',
    'Posts',
    'Users',
    'Groups',
    'Pages',
    'Networks',
    'Other design'
  ];

  const handleTab = useCallback(
    (tab: string) => {
      const next = new URLSearchParams(location.search);
      next.set('database_tab', tab);
      navigate({
        pathname: location.pathname,
        search: next.toString()
      });
    },
    [location.pathname, navigate, location.search]
  );

  const handleSearchShow = useCallback(() => {
    setAdvancedToolBtn(false);
    const next = new URLSearchParams(location.search);
    const panel = next.get('search_panel');
    next.set(
      'search_panel',
      panel === null ? '1' : panel !== '0' ? '0' : '1'
    );
    navigate({
      pathname: location.pathname,
      search: next.toString()
    });
  }, [location.pathname, navigate, location.search]);

  const handleAdvancedShow = useCallback(() => {
    const next = new URLSearchParams(location.search);
    next.set('search_panel', '2');
    navigate({
      pathname: location.pathname,
      search: next.toString()
    });
  }, [location.pathname, navigate, location.search]);

  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      setMockTableData((pre) => [
        ...pre,
        {
          item: 'Post',
          user: 'Olive Yew',
          addeddate: 'June 26, 2022 15:45',
          addbyuser: { name: 'Nimrod', image: person3 },
          case: 'Lorem ipsum',
          priority: 'Medium',
          view: { alert: Math.floor(Math.random() * 2) === 1 }
        }
      ]);
    }
  }, []);

  return (
    <>
      <div className="database">
        <div className="database__header">
          <div>
            <div className="database__header-title">Database</div>
            <ActionTab
              className="database__header-tab"
              data={tabData}
              onSelect={handleTab}
              select={
                query.get('database_tab') === null
                  ? tabData[0]
                  : (query.get('database_tab') ?? tabData[0])
              }
            />
          </div>
        </div>
        <div className="database__content">
          <div className="database__content-1">
            <DatabaseInput
              className="database__url-input"
              inputValue={url}
              action={setUrl}
              tool={<div className="database__add-button">+ Add to DB</div>}
            />
            <div className="database__second-row">
              <DatabaseInput
                className="database__comment-input"
                inputValue={comment}
                action={setComment}
              />
              <DatabaseInput
                className="database__cases-input"
                inputValue={cases}
                action={setCases}
                tool={
                  <div className="database__tool-row">
                    <div className="database__plus">+</div>
                    <div className="database__circle-button">
                      <i className="fas fa-chevron-down"></i>
                    </div>
                  </div>
                }
              />
            </div>
          </div>
          <CustomizeTable
            className="database__content-2"
            header={
              <div className="database__table-header">
                <div className="database__table-header-first">
                  <div className="database__table-title">Database items</div>
                  <div className="database__tool-end">
                    {advancedToolBtn ? (
                      <>
                        <div className="database__search-tool">Save Search</div>
                        <div className="database__search-tool">Cancel Search</div>
                      </>
                    ) : (
                      <></>
                    )}
                    <img src={refresh} alt="tool" className="database__tool" />
                    <img
                      src={searchIcon}
                      alt="tool"
                      className="database__tool"
                      onClick={handleSearchShow}
                    />
                  </div>
                </div>
                {query.get('search_panel') === '1' ? (
                  <div className="database__table-header-second">
                    <DatabaseInput
                      className="database__table-search-input"
                      inputValue={tableSearch}
                      placeholder="Insert text here..."
                      action={setTableSearch}
                    />
                    <div className="database__search-button">
                      <img src={searchIcon} alt="tool" />
                    </div>
                    <div className="database__advanced-button" onClick={handleAdvancedShow}>
                      Advanced Search
                    </div>
                  </div>
                ) : query.get('search_panel') === '2' ? (
                  <div className="database__table-header-third">
                    <div className="database__filter-row">
                      <div className="database__input-root">
                        <div className="database__input-description">Any of these words:</div>
                        <DatabaseInput
                          className="database__input"
                          inputValue={tableSearch}
                          placeholder="Insert text here..."
                          action={setTableSearch}
                        />
                      </div>
                      <div className="database__input-root">
                        <div className="database__input-description">All of these words:</div>
                        <DatabaseInput
                          className="database__input"
                          inputValue={tableSearch}
                          placeholder="Insert text here..."
                          action={setTableSearch}
                        />
                      </div>
                      <DatabaseSearchDropdown
                        label="Cases"
                        selectedValue="All"
                        className="database__cases"
                        type="keyword"
                        panelClassName="dropChildrenRoot"
                      >
                        <div className="dropRoot">
                          <div className="dropItem">Lorem ipsum</div>
                          <div className="dropItem">Lorem ipsum</div>
                          <div className="dropItem">Lorem ipsum</div>
                          <div className="dropItem">Lorem ipsum</div>
                          <div className="topRightArrow"></div>
                        </div>
                      </DatabaseSearchDropdown>
                      <DatabaseSearchDropdown
                        label="Social platform"
                        selectedValue="All"
                        className="database__social"
                        type="keyword"
                        panelClassName="dropChildrenRoot"
                      >
                        <div className="database__platform-dropdown">
                          <div className="database__platform-item">
                            <div className="database__check-root"></div>
                            <img src={youtube} alt="social_icon" />
                          </div>
                          <div className="database__platform-item">
                            <div className="database__check-root"></div>
                            <img src={instagram} alt="social_icon" />
                          </div>
                          <div className="database__platform-item">
                            <div className="database__check-root"></div>
                            <img src={facebook} alt="social_icon" />
                          </div>
                          <div className="database__platform-item">
                            <div className="database__check-root"></div>
                            <img src={twitter} alt="social_icon" />
                          </div>
                          <div className="database__platform-item">
                            <div className="database__check-root"></div>
                            <img src={tiktok} alt="social_icon" />
                          </div>
                        </div>
                      </DatabaseSearchDropdown>
                      <LetterSelectButton
                        data={firstLetterSelect}
                        selected={firstLetter}
                        action={setFirstLetter}
                      />
                    </div>
                    <div className="database__filter-row">
                      <div className="database__input-root">
                        <div className="database__input-description">This exact phrase:</div>
                        <DatabaseInput
                          className="database__input"
                          inputValue={tableSearch}
                          placeholder="Insert text here..."
                          action={setTableSearch}
                        />
                      </div>
                      <div className="database__input-root">
                        <div className="database__input-description">None of these words:</div>
                        <DatabaseInput
                          className="database__input"
                          inputValue={tableSearch}
                          placeholder="Insert text here..."
                          action={setTableSearch}
                        />
                      </div>
                      <DatabaseSearchDropdown
                        label="Added date"
                        selectedValue="All"
                        className="database__cases"
                        type="calendar"
                        panelClassName="dropChildrenRoot"
                      >
                        <div className="dropRoot">
                          <div className="dropItem">Lorem ipsum</div>
                          <div className="dropItem">Lorem ipsum</div>
                          <div className="dropItem">Lorem ipsum</div>
                          <div className="dropItem">Lorem ipsum</div>
                          <div className="topRightArrow"></div>
                        </div>
                      </DatabaseSearchDropdown>
                      <DatabaseSearchDropdown
                        label="Added by"
                        selectedValue="All"
                        className="database__social"
                        panelClassName="dropChildrenRoot"
                      >
                        <div className="dropRoot">
                          <div className="dropItem">Lorem ipsum</div>
                          <div className="dropItem">Lorem ipsum</div>
                          <div className="dropItem">Lorem ipsum</div>
                          <div className="dropItem">Lorem ipsum</div>
                          <div className="topRightArrow"></div>
                        </div>
                      </DatabaseSearchDropdown>
                      <LetterSelectButton
                        data={secondLetterSelect}
                        selected={secondLetter}
                        action={setSecondLetter}
                      />
                    </div>
                    <div
                      className="database__search-button"
                      onClick={() => setAdvancedToolBtn(!advancedToolBtn)}
                    >
                      <img src={searchIcon} alt="tool" />
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            }
            columnHeaders={[
              '',
              'Item',
              'User',
              'Added date',
              'Added by',
              'Case',
              'Priority',
              'Screenshot',
              'Link',
              ''
            ]}
            children={mockTableData.map((item, index) => (
              <tr key={index}>
                <td>
                  <img src={youtube} alt="social_icon"></img>
                </td>
                <td>{item.item}</td>
                <td>{item.user}</td>
                <td>{item.addeddate}</td>
                <td>
                  <img src={item.addbyuser.image} alt="avatar" />{' '}
                  {item.addbyuser.name}
                </td>
                <td>{item.case}</td>
                <td>
                  <ColorBtn
                    label="Medium"
                    width={130}
                    showArrow
                    color="#37CE4A"
                  />
                </td>
                <td>
                  {item.view.alert ? (
                    <img
                      src={tableAlertIcon}
                      className="database__alert-icon"
                      alt="alert"
                    />
                  ) : (
                    <></>
                  )}
                  View
                </td>
                <td>Link</td>
                <td>
                  <ThreeDotBtn className="database__dot-button" action={() => {}} />
                </td>
              </tr>
            ))}
          />
        </div>
      </div>
    </>
  );
}

export default Database;
