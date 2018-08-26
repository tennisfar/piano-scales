import React from 'react'

const allOneHandNotes = ['C major', 'G major', 'D major', 'A major', 'E major', 'B major', 'F major']
const allBothHandNotes = ['C major', 'G major']

class IndexPage extends React.Component {
  constructor() {
    super()

    this.scaleIndex = 0
    this.scales = []

    this.getNote = this.getNote.bind(this)
    this.reloadScales = this.reloadScales.bind(this)

    this.reloadScales()

    this.state = {
      note: 'Begin',
    }
  }

  reloadScales() {
    this.scales = [
      {
        hand: 'Right hand',
        notes: [...allOneHandNotes],
      },
      {
        hand: 'Left hand',
        notes: [...allOneHandNotes],
      },
      {
        hand: 'Both hands',
        notes: [...allBothHandNotes],
      },
    ]
  }

  getNote() {
    const noteIndex = Math.floor(Math.random() * this.scales[this.scaleIndex].notes.length)
    const note = this.scales[this.scaleIndex].notes[noteIndex]

    if (note !== this.state.note) {
      this.setState({
        note: note,
        hand: this.scales[this.scaleIndex].hand,
      })
      this.scales[this.scaleIndex].notes.splice(noteIndex, 1)
    } else {
      this.getNote()
    }

    if (this.scales[this.scaleIndex].notes.length === 0) {
      this.scaleIndex++
      if (this.scaleIndex >= this.scales.length) {
        this.scaleIndex = 0
        this.reloadScales()
      }
    }
  }

  render() {
    return (
      <div className="note-container" onClick={this.getNote}>
        <div className="note">{this.state.note}</div>
        <div className="hand">
          {this.state.hand}
        </div>
      </div>
    )
  }
}

export default IndexPage