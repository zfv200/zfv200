import React from 'react'
import { Document, Page } from 'react-pdf'

class Resume extends React.Component {
  state = {
    pageNumber: 1,
  }

  render() {
    const { pageNumber } = this.state;

    return (
      <div className="resume">
        <Document file="ZVaryResume.pdf">
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    );
  }
}

export default Resume
