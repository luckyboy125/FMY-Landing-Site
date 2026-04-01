import { useEffect, useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useOutsideClick } from '../../hook/DetectOutsideClick';
import { doughnutChartColorData } from '../../helpers/chart.helper';
import ActionTab from '../../components/ActionTab/ActionTab';
import CardLayout from '../../components/CardLayout/CardLayout';
import ModalLayout from '../../components/ModalLayout/ModalLayout';
import RoundButton from '../../components/RoundButton/RoundButton';
import SearchInput from '../../components/SearchInput/SearchInput';
import CustomizeTable from '../../components/CustomizeTable/CustomizeTable';
import CustomizeDoughnutChart from '../../components/CustomizeDoughnutChart/CustomizeDoughnutChart';
import closeIcon from '../../asset/images/close_icon.svg';
import youtube from '../../asset/images/social/youtube.svg';
import facebook from '../../asset/images/social/facebook.svg';
import instagram from '../../asset/images/social/instagram.svg';
import './Networks.css';

interface NetworksTableRow {
  network: string;
  addeddate: string;
  active: boolean;
  number_of_users: number;
}

function Networks() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const tabData = ['All', 'Government', 'networkss', 'Army'];
  const toolDropdownRef = useOutsideClick<HTMLDivElement>(() =>
    setDropdownShow(false)
  );

  const toolDropdown = [
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum'
  ];

  const [searchValue, setSearchValue] = useState('');
  const [dropdownSearch, setDropdownSearch] = useState('');
  const [dropdownShow, setDropdownShow] = useState(false);
  const [newNetworkModal, setNewNetworkModal] = useState(false);
  const [mockTableData, setMockTableData] = useState<NetworksTableRow[]>([]);
  const [mockDoughnutData, setMockDoughnutData] = useState<number[]>([]);

  const handleTab = useCallback(
    (tab: string) => {
      const next = new URLSearchParams(location.search);
      next.set('networks_tab', tab);
      navigate({
        pathname: location.pathname,
        search: next.toString()
      });
    },
    [location.pathname, navigate, location.search]
  );

  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      setMockTableData((pre) => [
        ...pre,
        {
          network: 'Lorem ipsum dolor',
          addeddate: '17 Nov 2022',
          active: Math.floor(Math.random() * 2) === 0,
          number_of_users: Math.floor(Math.random() * 250)
        }
      ]);
    }
    const id = setInterval(() => {
      setMockDoughnutData([
        Math.floor(Math.random() * 500 + 900),
        Math.floor(Math.random() * 500 + 900),
        Math.floor(Math.random() * 500 + 900),
        Math.floor(Math.random() * 500 + 900),
        Math.floor(Math.random() * 500 + 900),
        Math.floor(Math.random() * 500 + 900)
      ]);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="networks">
      <div className="networks__header">
        <div>
          <div className="networks__header-title">Networks</div>
          <ActionTab
            className="networks__header-tab"
            data={tabData}
            onSelect={handleTab}
            select={
              query.get('networks_tab') === null
                ? tabData[0]
                : (query.get('networks_tab') ?? tabData[0])
            }
          />
        </div>
        <div className="networks__header-end">
          <div className="networks__header-btn" onClick={() => setNewNetworkModal(true)}>
            + New Network
          </div>
        </div>
      </div>
      <div className="networks__content">
        <div className="networks__content-top">
          <CardLayout
            className="networks__chart1"
            contentStyle="networks__chart1-body"
            headerStyle="networks__chart1-header"
            header={
              <>
                <div className="networks__chart1-header-title">Networks</div>
                <div className="networks__chart1-header-content">Biggest networks</div>
              </>
            }
          >
            <div className="networks__description">
              <div
                className="networks__description-item"
                style={{ marginTop: '4px', paddingBottom: '24px' }}
              >
                <div className="networks__description-item-title">Total networks</div>
                <div
                  className="networks__description-item-count"
                  style={{ color: '#0FDF63' }}
                >
                  630
                </div>
              </div>
              <div
                className="networks__description-item"
                style={{ padding: '28px 0 28px' }}
              >
                <div className="networks__description-item-title">
                  New networks (past 7 days)
                </div>
                <div
                  className="networks__description-item-count"
                  style={{ color: '#75B3FF' }}
                >
                  100
                </div>
              </div>
            </div>
            <div className="networks__doughnut-chart">
              <CustomizeDoughnutChart
                data={mockDoughnutData}
                labels={[
                  'Lorem ipsum',
                  'Lorem ipsum',
                  'Lorem ipsum',
                  'Lorem ipsum',
                  'Lorem ipsum',
                  'Other'
                ]}
                segmentColors={doughnutChartColorData}
              />
              <div className="networks__doughnut-description">
                {['first', 'second', 'third', 'fourth', 'fifth', 'sixth'].map(
                  (item, index) => (
                    <div className="networks__doughnut-description-item" key={index}>
                      <div
                        className="networks__doughnut-icon"
                        style={{
                          background: `linear-gradient(238.95deg, ${doughnutChartColorData[index]?.first} 31.21%, ${doughnutChartColorData[index]?.last} 62.45%)`
                        }}
                      />
                      <div className="networks__doughnut-item-name">{item}</div>
                    </div>
                  )
                )}
              </div>
            </div>
            <RoundButton
              className="networks__tool"
              action={() => setDropdownShow(!dropdownShow)}
            />
            {dropdownShow ? (
              <div className="networks__tool-dropdown" ref={toolDropdownRef}>
                <div className="networks__search">
                  <div className="networks__search-round">
                    <i className="fas fa-search"></i>
                  </div>
                  <input
                    placeholder="Search"
                    value={dropdownSearch}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setDropdownSearch(e.target.value)
                    }
                  />
                </div>
                {toolDropdown.map((item, index) => (
                  <div
                    key={index}
                    className="networks__dropdown-item"
                    onClick={() => setDropdownShow(false)}
                  >
                    {item}
                  </div>
                ))}
              </div>
            ) : (
              <></>
            )}
          </CardLayout>
          <CardLayout
            className="networks__chart2"
            contentStyle="networks__chart2-body"
            headerStyle="networks__chart2-header"
            header={<div className="networks__chart2-header-title">Lorem ipsum</div>}
          />
        </div>
        <CustomizeTable
          className="networks__content-bottom"
          header={
            <div className="networks__table-header">
              <div className="networks__table-title">Lorem ipsum dolor</div>
              <SearchInput
                action={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearchValue(e.target.value)
                }
                inputValue={searchValue}
                className="networks__table-search"
                inputWith
              />
            </div>
          }
          columnHeaders={[
            'Network',
            'Added date',
            'Platform',
            'Active/Inactive',
            'Number of users'
          ]}
          children={mockTableData.map((item, index) => (
            <tr key={index}>
              <td>{item.network}</td>
              <td>{item.addeddate}</td>
              <td>
                {index % 3 === 0 ? (
                  <div>
                    <div className="networks__image-group">
                      <img className="networks__image--small" src={instagram} alt="social" />
                    </div>
                    <div className="networks__image-group" style={{ marginTop: '5px' }}>
                      <img
                        className="networks__image--small"
                        src={facebook}
                        alt="social"
                        style={{ marginRight: '10px' }}
                      />
                      <img className="networks__image--small" src={youtube} alt="social" />
                    </div>
                  </div>
                ) : (
                  <div className="networks__image-group">
                    <img className="networks__image--big" src={instagram} alt="social" />
                  </div>
                )}
              </td>
              <td>
                <div className={item.active ? 'networks__status--active' : 'networks__status--inactive'}>
                  {item.active ? 'Active' : 'Inactive'}
                </div>
              </td>
              <td>{item.number_of_users}</td>
            </tr>
          ))}
        />
      </div>
      <ModalLayout
        className="networks__new-modal"
        show={newNetworkModal}
        onClose={() => setNewNetworkModal(false)}
      >
        <img
          src={closeIcon}
          className="networks__close-icon"
          alt="closeIcon"
          onClick={() => setNewNetworkModal(false)}
        />
        <div className="networks__modal-title">New Networks:</div>
        <div className="networks__upload-btn">+ Upload CSV</div>
      </ModalLayout>
    </div>
  );
}

export default Networks;
