import * as React from "react";
import { Button, Card, CardBody, CardGroup, CardImg, CardSubtitle, CardText, CardTitle, Col, Container, Form, FormGroup, FormText, Input, Label, Row } from "reactstrap";
import RPM from "../components/RPM";

import { useAuth } from "../hooks/useAuth";
import axios from 'axios';
import { SearchBase, SearchComponent, SearchBox } from '@appbaseio/react-searchbox';
import ReactPaginate from 'react-paginate';

function Home() {
   const { authed, loading, vote } = useAuth();

   const [data,setData] = React.useState([]);

   const LEADERBOARD_URL = "";//"https://us-east-1.aws.data.mongodb-api.com/app/application-0-blkhf/endpoint/leaderboard";

   React.useEffect(() => {
      /*
      axios.get(LEADERBOARD_URL)
      .then(res => {
         console.log('res',res)
         setData(res.data);
      })
      let appRefreshInterval = setInterval(function(){
         axios.get(LEADERBOARD_URL)
            .then(res => {
               console.log('res',res)
               setData(res.data);
            })
      },5000);
      // Specify how to clean up after this effect:
      return function cleanup() {
         console.log('clearing refresh interval');
         clearInterval(appRefreshInterval);
      };
      */
   },[]);
   return <div className="home-content">
            <div className="context">
               <div className="area" >
                                    <ul className="circles">
                                          <li></li>
                                          <li></li>
                                          <li></li>
                                          <li></li>
                                          <li></li>
                                          <li></li>
                                          <li></li>
                                          <li></li>
                                          <li></li>
                                          <li></li>
                                    </ul>
                           </div >
            </div>
            <div>
            <Container style={{height:"70vh", overflow:"auto"}}>
               <Row>
                  <Col>
                  <SearchBase
                     index="defaultDynamic"
                     url="https://us-east-1.aws.data.mongodb-api.com/app/application-0-cjqyw/endpoint/http_endpoint/reactivesearch"
                     credentials="funkydemo:funkydemo"
                     mongodb={{
                        db: 'sample_airbnb',
                        collection: 'listingsAndReviews'
                     }}
                  >
                     <div>
                        <div className="row">
                           <div className="col">
                           <SearchBox
                              id="search-component"
                           	index="defaultDynamic" 
                              dataField="name"
                              placeholder="Search for listings"
                              fuzziness={1}
                              react={{
                                 and: ['search-component','facet-component','facet-component-2','facet-component-3']
                                 }}
                              />
                           </div>
                        </div>
                        <div className="row">
                        <div className="col">
                        <SearchComponent
                              title="Facet"
                              id="facet-component"
                              type="term"
                              react={{
                                 and: ['search-component','facet-component','facet-component-2','facet-component-3']
                                 }}
                              index="defaultDynamic"
                              dataField="room_type"
                              URLParams
                              aggregationSize={5}
                              includeFields={['property_type','room_type']}
                              // To initialize with default value
                              value={[]}
                              render={({ aggregationData, loading, value, setValue }) => {
                              return (
                                 <div className="filter-container">
                                    <h3>Room Types</h3>
                                    {loading ? (
                                    <div>Loading Filters ...</div>
                                    ) : (
                                    aggregationData.data.map(item => (
                                       <div className="list-item" key={item._key}>
                                          <input
                                          type="checkbox"
                                          checked={value ? value.includes(item._key) : false}
                                          value={item._key}
                                          onChange={e => {
                                             const values = value || [];
                                             if (values && values.includes(e.target.value)) {
                                                values.splice(values.indexOf(e.target.value), 1);
                                             } else {
                                                values.push(e.target.value);
                                             }
                                             // Set filter value and trigger custom query
                                             setValue(values, {
                                                triggerDefaultQuery: false,
                                                triggerCustomQuery: true,
                                                stateChanges: true
                                             });
                                          }}
                                          />
                                          <label className="list-item-label" htmlFor={item._key}>
                                          {item._key} ({item._doc_count})
                                          </label>
                                       </div>
                                    ))
                                    )}
                                 </div>
                              );
                              }}
                           />
                           <SearchComponent
                              title="Facet"
                              id="facet-component-2"
                              type="term"
                              index="defaultDynamic"
                              dataField="property_type"
                              URLParams
                              aggregationSize={9}
                              includeFields={['property_type','room_type']}
                              // To initialize with default value
                              value={[]}
                              react={{
                                 and: ['search-component','facet-component','facet-component-2','facet-component-3']
                                 }}
                              render={({ aggregationData, loading, value, setValue }) => {
                              return (
                                 <div className="filter-container">
                                    <h3>Property Types</h3>
                                    {loading ? (
                                    <div>Loading Filters ...</div>
                                    ) : (
                                    aggregationData.data.map(item => (
                                       <div className="list-item" key={item._key}>
                                          <input
                                          type="checkbox"
                                          checked={value ? value.includes(item._key) : false}
                                          value={item._key}
                                          onChange={e => {
                                             const values = value || [];
                                             if (values && values.includes(e.target.value)) {
                                                values.splice(values.indexOf(e.target.value), 1);
                                             } else {
                                                values.push(e.target.value);
                                             }
                                             // Set filter value and trigger custom query
                                             setValue(values, {
                                                triggerDefaultQuery: false,
                                                triggerCustomQuery: true,
                                                stateChanges: true
                                             });
                                          }}
                                          />
                                          <label className="list-item-label" htmlFor={item._key}>
                                          {item._key} ({item._doc_count})
                                          </label>
                                       </div>
                                    ))
                                    )}
                                 </div>
                              );
                              }}
                           />
                           <SearchComponent
                              title="Facet"
                              id="facet-component-3"
                              type="term"
                              index="defaultDynamic"
                              dataField="address.country"
                              URLParams
                              aggregationSize={9}
                              includeFields={['property_type','room_type','address.country']}
                              // To initialize with default value
                              value={[]}
                              react={{
                                 and: ['search-component','facet-component','facet-component-2','facet-component-3']
                                 }}
                              render={({ aggregationData, loading, value, setValue }) => {
                              return (
                                 <div className="filter-container">
                                    <h3>Country</h3>
                                    {loading ? (
                                    <div>Loading Filters ...</div>
                                    ) : (
                                    aggregationData.data.map(item => (
                                       <div className="list-item" key={item._key}>
                                          <input
                                          type="checkbox"
                                          checked={value ? value.includes(item._key) : false}
                                          value={item._key}
                                          onChange={e => {
                                             const values = value || [];
                                             if (values && values.includes(e.target.value)) {
                                                values.splice(values.indexOf(e.target.value), 1);
                                             } else {
                                                values.push(e.target.value);
                                             }
                                             // Set filter value and trigger custom query
                                             setValue(values, {
                                                triggerDefaultQuery: false,
                                                triggerCustomQuery: true,
                                                stateChanges: true
                                             });
                                          }}
                                          />
                                          <label className="list-item-label" htmlFor={item._key}>
                                          {item._key} ({item._doc_count})
                                          </label>
                                       </div>
                                    ))
                                    )}
                                 </div>
                              );
                              }}
                           />
                        </div>
                        <div className="col">
                           <SearchComponent
                              id="result-component"
                              highlight
                              dataField="name"
                              size={5}
                              includeFields={['name','property_type','room_type']}
                              react={{
                              and: ['search-component','facet-component','facet-component-2','facet-component-3']
                              }}
                           >
                              {({ results, loading, size, setValue, setFrom }) => {
                              return (
                                 <div className="result-list-container">
                                    {loading ? (
                                    <div>Loading Results ...</div>
                                    ) : (
                                    <div>
                                       {!results.data.length ? (
                                          <div>No results found</div>
                                       ) : (
                                          <p>
                                          {results.numberOfResults} results found in{' '}
                                          {results.time}
                                          ms
                                          </p>
                                       )}
                                       {results.data.map(item => (
                                          <div
                                          className="item-content text-left"
                                          key={item._id}
                                          style={{ padding: 10 }}
                                          >
                                          <h1>{item.name}</h1>
                                          

                                          <span
                                             style={{
                                                background: '#efefef',
                                                padding: 3,
                                                borderRadius: 3,
                                                marginTop: 10,
                                                marginBottom: 10,
                                                width: 'auto'
                                             }}
                                          >
                                             #{item.property_type} || {item.room_type}
                                          </span>
                                          </div>
                                       ))}
                                    </div>
                                    )}
                                    <ReactPaginate
                                    pageCount={Math.floor(results.numberOfResults / size)}
                                    onPageChange={({ selected }) => setFrom(selected * size)}
                                    previousLabel="previous"
                                    nextLabel="next"
                                    breakLabel="..."
                                    breakClassName="break-me"
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={5}
                                    breakLinkClassName="page-link"
                                    containerClassName="pagination"
                                    pageClassName="page-item"
                                    pageLinkClassName="page-link"
                                    previousClassName="page-item"
                                    previousLinkClassName="page-link"
                                    nextClassName="page-item"
                                    nextLinkClassName="page-link"
                                    activeClassName="active"
                                    />
                                 </div>
                              );
                              }}
                           </SearchComponent>
                        </div>
                        </div>
                     </div>
                  </SearchBase>
                  </Col>
               </Row>
               
            </Container>
                  
               
            </div>
         </div>;
}

export default Home;
