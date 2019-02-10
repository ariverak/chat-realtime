import React, { Component } from 'react'
import { Button } from '@material-ui/core'

import socketIOClient from 'socket.io-client'



class ButtonSaludar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: 'juanito',
        };
    }

    send() {
        const socket = socketIOClient.connect('http://localhost:5000')
        socket.emit('saludar', this.state.username)


    }

    render() {

        const socket = socketIOClient.connect('http://localhost:5000')
        socket.emit('conectado', this.state.username)
        socket.on('conectado', (name) => {
            alert(`se conecto ${name}`)
        })
        socket.on('saludar', () => {
            console.log('saludar')
            document.body.style.backgroundColor = 'red'

        })

        return (
            <Button onClick={() => this.send()} variant="contained" color="primary">Hola Mundo</Button>
        )

    }
}

export default ButtonSaludar