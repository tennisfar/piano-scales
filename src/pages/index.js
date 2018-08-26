import React from 'react'

const fixedNotes = ['C major', 'G major', 'D major', 'A major', 'E major', 'B major', 'F major']
let notes = [...fixedNotes]

class IndexPage extends React.Component {
  constructor() {
    super()

    this.state = {
      note: 'Begin',
      rightHand: true,
    }

    this.getNote = this.getNote.bind(this)
  }

  getNote() {
    if (notes.length === 0) {
      notes = [...fixedNotes]
      this.setState(prevState => {
        return {
          rightHand: !prevState.rightHand,
        }
      })
    }

    const noteIndex = Math.floor(Math.random() * notes.length)
    const note = notes[noteIndex]

    if (note !== this.state.note) {
      this.setState({ note: note })
      notes.splice(noteIndex, 1)
    } else {
      this.getNote()
    }
  }

  render() {
    return (
      <div className="note-container" onClick={this.getNote}>
        <div className="note">{this.state.note}</div>
        <div className="hand">
          {this.state.note !== 'Begin' && (this.state.rightHand ? 'Right hand' : 'Left hand')}
        </div>
      </div>
    )
  }
}

export default IndexPage