import { Component } from 'react';
import Toto from './Toto';
import Form from './Form'

class Maman extends Component {
    state = {
        messageMaman: null,
        messageToto: null,
        disabled: true
    }

    ordreMaman = (msg) => this.setState({messageMaman: msg, disabled:false})
    reponseToto = msg => this.setState({ messageToto: msg });

    render() {
        return (
            <div>

                <Form/>

                <hr className="hr"/>

                <h1>Maman</h1>
                <button 
                    className="btnMaman"
                    onClick={() => this.ordreMaman("Va ranger ta chambre")}
                >Ordre de maman</button>

                <p>{this.state.messageMaman}</p>

                <hr className="hr"/>
                
                <Toto 
                    name="Toto"
                    reponseTotoProps={this.reponseToto}
                    leState={this.state}
                />
                
            </div>
        )
    }
}

export default Maman;