import React from 'react';

import Aux from './AuxSupport';
import Modal from '../Components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) =>{
    return class extends React.Component{
        state = {
            error: null
        };

        componentWillMount(){
            axios.interceptors.request.use(res=>{
                this.setState({ error: null });
                return res;
            });
            axios.interceptors.response.use(res=>res,error=>{
                this.setState({ error: error })
                return error
            });
        }

        modalCancel = () =>{
            this.setState({ error: null })
        }

        render(){
            return(
                <Aux>
                    <Modal 
                        show={this.state.error}
                        modalCancel={this.modalCancel}>
                            {this.state.error? this.state.error.message: null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            )
        }
    }
};


export default withErrorHandler;