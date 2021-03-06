import React, { Component } from 'react';
import Modal from "../../components/UI/Modal/Modal";
import Outside from "../../hoc/Outside/Outside";

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        componentDidMount() {
            axios.interceptors.use(req => {
                this.setState({ error: null });
                return req;
            });

            axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error })
            });
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null })
        }

        render() {
            return (
                <Outside>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Outside>
            )
        }
    }
};

export default withErrorHandler;