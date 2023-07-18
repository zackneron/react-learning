import React, {Fragment} from 'react';

class Students extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Fragment>
                <h2>Welcome student {this.props.name}</h2>
                <pre>{JSON.stringify(this.props)}</pre>
                <button className='btn btn-primary'>
                    Send <i className='fab fa-facebook text-primary'></i>
                </button>
            </Fragment>
        )
    }
}

export default Students;