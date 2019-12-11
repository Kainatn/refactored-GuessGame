import React, { Component } from 'react';
import './Game.css';
import './Guess.css';
import { Layout, Typography, Button } from 'antd';
import { Form, InputNumber, Card } from 'antd';
const { Header, Footer, Content } = Layout;
const { Title } = Typography;
export class Game extends Component {

    //initalize state
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.state = {
            guessedNo: null,
            count: 1,
            easyMax: 0,
            random: 0,
            enable: true,
            place: 'Select Level First'
        };
    }

    // Generate random Number  using argument
    getRandomNumber = (column) => {
        console.log('inside function');
        if (column > 0) {
            console.log(column);
            console.log('before  set state');
            let Newrandom = Math.floor(1 + Math.random() * (column - 1))
            this.setState({
                easyMax: column,
                random: Newrandom,
                enable: false,
                place: '',
            })
            console.log('After  set state');

            console.log(this.state.random);
        }
        else {
            alert(' enter number');
        }
    };
    //get value of user guessed  
    changeDone = (e) => {
        this.setState({
            guessedNo: e,
        })
    }

    //Compare random number to user guessed number
    checkNumberHandler = (e) => {
        e.preventDefault();
        const { guessedNo, random, count } = this.state;
        this.setState({ count: count + 1 })
        if (guessedNo === random) {
            alert('Congratulation You guessed the number in ' + this.state.count + ' tries');
            window.location.reload();
        } else if (guessedNo < random) {
            alert("You guessed Small Number")
        }
        else if (guessedNo > random) {
            alert("You guessed Big Number")
        }
    }

    render() {
        console.log(this.state.random);

        return (

            <Layout>
                <Header>
                    <Title level={2}>Guess The Number</Title>
                </Header>
                <Content>
                    <div>
                        <Button type="primary" onClick={() => this.getRandomNumber(100)}>Easy</Button>
                        <Button onClick={() => this.getRandomNumber(500)}>Medium</Button>
                        <Button type="primary" onClick={() => this.getRandomNumber(1000)}>Hard</Button>
                    </div>

                    <Card title={"Guess number between 1 to " + this.state.easyMax} bordered={false} style={{ width: 500 }}>
                        <Form className="login-form" >
                            <InputNumber min={1} placeholder={this.state.place} type='number' onChange={this.changeDone.bind(this)} disabled={this.state.enable} />
                        </Form>
                        <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.checkNumberHandler} >
                            Guess
                </Button>

                    </Card>
                </Content>
                <Footer>All right reserve to Guess The Number </Footer>
            </Layout>

        );
    }
}

export default Game;
