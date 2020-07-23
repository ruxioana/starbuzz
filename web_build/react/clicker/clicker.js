
class Clicker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            clicks: 0
        }
        /*   */
    }

    render() {
        return (
            <button onClick={ () => this.handleClick }> {/* arrowfunction ca sa fie binding pentru handleClick la this */}
                You clicked me { this.state.clicks } times
            </button>
        )
    }

    handleClick() {
        this.setState({
            clicks: this.state.clicks + 1
        })
    } /* asa se modifica starea, daca facem doar click+1, nu isi va da seama */
}

ReactDOM.render(
    <Clicker/>,
    document.getElementById('root')
)