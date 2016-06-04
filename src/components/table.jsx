import React from 'react';
import Issues from '../data/issues.js'

export default class Table extends React.Component {
  issues() {
    let i = new Issues;
    return i.enumerate();
  }

  render() {
    return(
      <table className="table table-striped table-hover ">
        <thead>
          <tr>
            <th>#</th>
            <th>Project Name</th>
            <th>Issue Number</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            this.issues().map(function(issue, index) {
              return(
              <tr key={issue.id}>
                <td>{index + 1}</td>
                <td>{issue.owner + " / " + issue.project}</td>
                <td>{issue.number}</td>
                <td><a href={issue.link} target='_blank'>Link</a></td>
              </tr>
              )
              })
          }
        </tbody>
      </table>
    );
  }
}
