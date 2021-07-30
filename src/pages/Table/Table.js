import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Column from "antd/lib/table/Column";
import { Table, Col, Row } from "antd";
import { useHistory } from "react-router-dom";
import Flags from "country-flag-icons/react/3x2";
import Select from "react-select";
import { CovidAction } from "../../redux/rootActions";
import axios from "axios";

function TableComponent() {
  const history = useHistory();
  const dispatch = useDispatch();
  console.log(1);
  const [countries, setCountries] = useState(null);
  // const countries = useSelector((state) => state.CovidReducer.tableData);
  const [activeCountry, setActiveCountry] = useState(countries);

  const fetchData = useCallback(() => {
    axios({
      url: "https://api.covid19api.com/summary",
      method: "GET",
    })
      .then((res) => {
        const dataTable = res.data.Countries.map((country) => {
          return { ...country, key: country.CountryCode };
        });

        setCountries(dataTable);
        setActiveCountry(dataTable);
        // dispatch(CovidAction.fetchTableData(dataTable));
      })
      .catch((error) => {});
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const options = [
    { value: "All", label: "All" },
    { value: "AF", label: "Afghanistan" },
    { value: "AL", label: "Albania" },
    { value: "DZ", label: "Algeria" },
    { value: "AD", label: "Andorra" },
    { value: "AO", label: "Angola" },
    { value: "AG", label: "Antigua and Barbuda" },
    { value: "AR", label: "Argentina" },
    { value: "AM", label: "Armenia" },
    { value: "AU", label: "Australia" },
    { value: "AT", label: "Austria" },
    { value: "AZ", label: "Azerbaijan" },
    { value: "BS", label: "Bahamas" },
    { value: "BH", label: "Bahrain" },
    { value: "BD", label: "Bangladesh" },
    { value: "BB", label: "Barbados" },
    { value: "BY", label: "Belarus" },
    { value: "BE", label: "Belgium" },
    { value: "BZ", label: "Belize" },
    { value: "BJ", label: "Benin" },
    { value: "BT", label: "Bhutan" },
    { value: "BO", label: "Bolivia" },
    { value: "BA", label: "Bosnia and Herzegovina" },
    { value: "BW", label: "Botswana" },
    { value: "BR", label: "Brazil" },
    { value: "BN", label: "Brunei Darussalam" },
    { value: "BG", label: "Bulgaria" },
    { value: "BF", label: "Burkina Faso" },
    { value: "BI", label: "Burundi" },
    { value: "KH", label: "Cambodia" },
    { value: "CM", label: "Cameroon" },
    { value: "CA", label: "Canada" },
    { value: "CV", label: "Cape Verde" },
    { value: "CF", label: "Central African Republic" },
    { value: "TD", label: "Chad" },
    { value: "CL", label: "Chile" },
    { value: "CN", label: "China" },
    { value: "CO", label: "Colombia" },
    { value: "KM", label: "Comoros" },
    { value: "CG", label: "Congo (Brazzaville)" },
    { value: "CD", label: "Congo (Kinshasa)" },
    { value: "CR", label: "Costa Rica" },
    { value: "HR", label: "Croatia" },
    { value: "CU", label: "Cuba" },
    { value: "CY", label: "Cyprus" },
    { value: "CZ", label: "Czech Republic" },
    { value: "CI", label: "Côte d'Ivoire" },
    { value: "DK", label: "Denmark" },
    { value: "DJ", label: "Djibouti" },
    { value: "DM", label: "Dominica" },
    { value: "DO", label: "Dominican Republic" },
    { value: "EC", label: "Ecuador" },
    { value: "EG", label: "Egypt" },
    { value: "SV", label: "El Salvador" },
    { value: "GQ", label: "Equatorial Guinea" },
    { value: "ER", label: "Eritrea" },
    { value: "EE", label: "Estonia" },
    { value: "ET", label: "Ethiopia" },
    { value: "FJ", label: "Fiji" },
    { value: "FI", label: "Finland" },
    { value: "FR", label: "France" },
    { value: "GA", label: "Gabon" },
    { value: "GM", label: "Gambia" },
    { value: "GE", label: "Georgia" },
    { value: "DE", label: "Germany" },
    { value: "GH", label: "Ghana" },
    { value: "GR", label: "Greece" },
    { value: "GD", label: "Grenada" },
    { value: "GT", label: "Guatemala" },
    { value: "GN", label: "Guinea" },
    { value: "GW", label: "Guinea-Bissau" },
    { value: "GY", label: "Guyana" },
    { value: "HT", label: "Haiti" },
    { value: "VA", label: "Holy See (Vatican City State)" },
    { value: "HN", label: "Honduras" },
    { value: "HU", label: "Hungary" },
    { value: "IS", label: "Iceland" },
    { value: "IN", label: "India" },
    { value: "ID", label: "Indonesia" },
    { value: "IR", label: "Iran, Islamic Republic of" },
    { value: "IQ", label: "Iraq" },
    { value: "IE", label: "Ireland" },
    { value: "IL", label: "Israel" },
    { value: "IT", label: "Italy" },
    { value: "JM", label: "Jamaica" },
    { value: "JP", label: "Japan" },
    { value: "JO", label: "Jordan" },
    { value: "KZ", label: "Kazakhstan" },
    { value: "KE", label: "Kenya" },
    { value: "KI", label: "Kiribati" },
    { value: "KR", label: "Korea (South)" },
    { value: "KW", label: "Kuwait" },
    { value: "KG", label: "Kyrgyzstan" },
    { value: "LA", label: "Lao PDR" },
    { value: "LV", label: "Latvia" },
    { value: "LB", label: "Lebanon" },
    { value: "LS", label: "Lesotho" },
    { value: "LR", label: "Liberia" },
    { value: "LY", label: "Libya" },
    { value: "LI", label: "Liechtenstein" },
    { value: "LT", label: "Lithuania" },
    { value: "LU", label: "Luxembourg" },
    { value: "MK", label: "Macedonia, Republic of" },
    { value: "MG", label: "Madagascar" },
    { value: "MW", label: "Malawi" },
    { value: "MY", label: "Malaysia" },
    { value: "MV", label: "Maldives" },
    { value: "ML", label: "Mali" },
    { value: "MT", label: "Malta" },
    { value: "MH", label: "Marshall Islands" },
    { value: "MR", label: "Mauritania" },
    { value: "MU", label: "Mauritius" },
    { value: "MX", label: "Mexico" },
    { value: "FM", label: "Micronesia, Federated States of" },
    { value: "MD", label: "Moldova" },
    { value: "MC", label: "Monaco" },
    { value: "MN", label: "Mongolia" },
    { value: "ME", label: "Montenegro" },
    { value: "MA", label: "Morocco" },
    { value: "MZ", label: "Mozambique" },
    { value: "MM", label: "Myanmar" },
    { value: "NA", label: "Namibia" },
    { value: "NP", label: "Nepal" },
    { value: "NL", label: "Netherlands" },
    { value: "NZ", label: "New Zealand" },
    { value: "NI", label: "Nicaragua" },
    { value: "NE", label: "Niger" },
    { value: "NG", label: "Nigeria" },
    { value: "NO", label: "Norway" },
    { value: "OM", label: "Oman" },
    { value: "PK", label: "Pakistan" },
    { value: "PW", label: "Palau" },
    { value: "PS", label: "Palestinian Territory" },
    { value: "PA", label: "Panama" },
    { value: "PG", label: "Papua New Guinea" },
    { value: "PY", label: "Paraguay" },
    { value: "PE", label: "Peru" },
    { value: "PH", label: "Philippines" },
    { value: "PL", label: "Poland" },
    { value: "PT", label: "Portugal" },
    { value: "QA", label: "Qatar" },
    { value: "XK", label: "Republic of Kosovo" },
    { value: "RO", label: "Romania" },
    { value: "RU", label: "Russian Federation" },
    { value: "RW", label: "Rwanda" },
    { value: "KN", label: "Saint Kitts and Nevis" },
    { value: "LC", label: "Saint Lucia" },
    { value: "VC", label: "Saint Vincent and Grenadines" },
    { value: "WS", label: "Samoa" },
    { value: "SM", label: "San Marino" },
    { value: "ST", label: "Sao Tome and Principe" },
    { value: "SA", label: "Saudi Arabia" },
    { value: "SN", label: "Senegal" },
    { value: "RS", label: "Serbia" },
    { value: "SC", label: "Seychelles" },
    { value: "SL", label: "Sierra Leone" },
    { value: "SG", label: "Singapore" },
    { value: "SK", label: "Slovakia" },
    { value: "SI", label: "Slovenia" },
    { value: "SB", label: "Solomon Islands" },
    { value: "SO", label: "Somalia" },
    { value: "ZA", label: "South Africa" },
    { value: "SS", label: "South Sudan" },
    { value: "ES", label: "Spain" },
    { value: "LK", label: "Sri Lanka" },
    { value: "SD", label: "Sudan" },
    { value: "SR", label: "Suriname" },
    { value: "SZ", label: "Swaziland" },
    { value: "SE", label: "Sweden" },
    { value: "CH", label: "Switzerland" },
    { value: "SY", label: "Syrian Arab Republic (Syria)" },
    { value: "TW", label: "Taiwan, Republic of China" },
    { value: "TJ", label: "Tajikistan" },
    { value: "TZ", label: "Tanzania, United Republic of" },
    { value: "TH", label: "Thailand" },
    { value: "TL", label: "Timor-Leste" },
    { value: "TG", label: "Togo" },
    { value: "TT", label: "Trinidad and Tobago" },
    { value: "TN", label: "Tunisia" },
    { value: "TR", label: "Turkey" },
    { value: "UG", label: "Uganda" },
    { value: "UA", label: "Ukraine" },
    { value: "AE", label: "United Arab Emirates" },
    { value: "GB", label: "United Kingdom" },
    { value: "US", label: "United States of America" },
    { value: "UY", label: "Uruguay" },
    { value: "UZ", label: "Uzbekistan" },
    { value: "VU", label: "Vanuatu" },
    { value: "VE", label: "Venezuela (Bolivarian Republic)" },
    { value: "VN", label: "Viet Nam" },
    { value: "YE", label: "Yemen" },
    { value: "ZM", label: "Zambia" },
    { value: "ZW", label: "Zimbabwe" },
  ];

  const handleChange = (selectedOption) => {
    if (selectedOption.value === "All") {
      setActiveCountry(countries);
    } else {
      const country = countries.filter(
        (country) => country.CountryCode === selectedOption.value
      );
      setActiveCountry(country);
    }
  };

  return (
    <>
      <Row>
        <Col
          style={{ padding: "20px" }}
          xs={{ span: 24, offset: 0 }}
          md={{ span: 10, offset: 14 }}
        >
          <Select
            isDisabled={!activeCountry}
            onChange={handleChange}
            options={options}
          />
        </Col>
      </Row>

      <Table
        bordered={true}
        dataSource={activeCountry}
        loading={!activeCountry}
        style={{ padding: "20px", paddingTop: "0px" }}
      >
        <Column
          title="Country"
          key="Country"
          render={(country) => {
            const Flag = Flags[country.CountryCode];
            return (
              <p
                style={{ cursor: "pointer" }}
                onClick={() => {
                  history.push(`/detail-country/${country.Country}`);
                }}
              >
                <Flag
                  style={{ width: "30px", height: "20px" }}
                  key={country.ID}
                />
                {" " + country.Country}
              </p>
            );
          }}
        />
        <Column
          title="Total Confirmed"
          dataIndex="TotalConfirmed"
          key="TotalConfirmed"
          sorter={(a, b) => a.TotalConfirmed - b.TotalConfirmed}
        />
        <Column
          title="New Confirmed"
          dataIndex="NewConfirmed"
          key="NewConfirmed"
          sorter={(a, b) => a.NewConfirmed - b.NewConfirmed}
        />
        <Column
          title="Total Deaths"
          dataIndex="TotalDeaths"
          key="TotalDeaths"
          sorter={(a, b) => a.TotalDeaths - b.TotalDeaths}
        />
        <Column
          title="New Deaths"
          dataIndex="NewDeaths"
          key="NewDeaths"
          sorter={(a, b) => a.NewDeaths - b.NewDeaths}
        />
        <Column
          title="Total Recovered"
          dataIndex="TotalRecovered"
          key="TotalRecovered"
          sorter={(a, b) => a.TotalRecovered - b.TotalRecovered}
        />
        <Column
          title="New Recovered"
          dataIndex="NewRecovered"
          key="NewRecovered"
          sorter={(a, b) => a.NewRecovered - b.NewRecovered}
        />
      </Table>
    </>
  );
}

export default TableComponent;
