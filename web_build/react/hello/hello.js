
class Weolcome extends React.Component {
    render() {
        return (
            <h1>
                { this.params.sayHello 
                    ? <div>Hello, { this.params.name }!</div>
                    : <div>Goodbye!</div>
                }
                
                <div>{ new Date().toISOString() }</div>
                <a href={ this.params.uri } className="highlight">Learn more about React</a>
            </h1>
        )
    }
}

const welcome = new Welcome();

/* similar cu ce este mai sus, am rescris tot procesul de jos

const Welcome = function(params) {
    return (
        <h1>
            { params.sayHello 
                ? <div>Hello, { params.name }!</div>
                : <div>Goodbye!</div>
            }
            
            <div>{ new Date().toISOString() }</div>
            <a href={ params.uri } className="highlight">Learn more about React</a>
        </h1>
    )
} */

const App = function() {
    return (
        <Welcome sayHello="{true}" uri="https://reactjs.org/" name="Ruxi"/>
    )
}

ReactDOM.render(
    <Welcome sayHello="{true}" uri="https://reactjs.org/" name="Ruxi"/>,
    document.getElementById('root')
)

/* 
const name = 'Ruxi';
const uri = 'https://reactjs.org/';
const sayHello = true;

const element = (
    <h1>
        { sayHello 
            ? <div>Hello, { name }!</div>
            : <div>Goodbye!</div>
        }
        
        <div>{ new Date().toISOString() }</div>
        <a href={ uri } className="highlight">Learn more about React</a>
    </h1>
)  babel preia scrierea asta si o transforma in JS

ReactDOM.render(
    element,
    document.getElementById('root')
)

*/

