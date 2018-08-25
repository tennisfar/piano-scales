import React from 'react'

class IndexPage extends React.Component {
  constructor() {
    super()
    this.state = { note: 'Click' }
  }

  render() {
    const notes = ['C major', 'G major', 'D major', 'A major', 'E major', 'B major', 'F major']

    const getNote = () => {
      const note = notes[Math.floor(Math.random() * notes.length)]
      
      if (note !== this.state.note) {
        this.setState({ note: note })
      } else {
        getNote()
      }
    }

    return (
      <div className="note-container"
           onClick={getNote}>{this.state.note}
      </div>
    )
  }
}

export default IndexPage