class WelcomeBack extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            appVersion:''
        }
    }
    render(){
        return(
            <>
            <h2>Hello Friend!</h2>
            <button>Download</button>
            </>
        )
    }
}
