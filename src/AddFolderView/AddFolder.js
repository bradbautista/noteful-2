import React, { Component } from 'react';
import config from '../config';
import ValidationError from '../ValidationError';
import MainContentArea from '../Common/MainContentArea';
import Context from '../Context';
import FormTitle from '../Common/FormTitle';
import FormLabel from '../Common/FormLabel';
import CancelButton from '../Common/CancelButton';
import ButtonLabel from '../Common/ButtonLabel';
import ButtonWrapper from '../Common/ButtonWrapper';
import AddFolderForm from './AddFolderForm';
import FolderNameInput from './FolderNameInput';
import AddFolderButton from './AddFolderButton';

export default class AddFolder extends Component {

    // Establish state to track folder name
    constructor(props) {
        super(props);
        this.state = {
            foldername: {
                value: '',
                touched: false,
            },
        }
    }

    // Form submission logic    
    handleSubmit = (e) => {

        e.preventDefault()
        
        const folder = {
            folder_name: this.state.foldername.value,
        }

        fetch(config.API_ENDPOINT + `folders/`, {
            method: 'POST',
            body: JSON.stringify(folder),
            headers: {
            'content-type': 'application/json',
            }
        })
        .then(res => {
            if (!res.ok) {
                // Get the error message from the response,
                return res.json().then(error => {
                // then throw it
                throw error
                })
            }
            return res.json()
        })
        .then(data => {
          this.setState({foldername: {value: '', touched: false}});
          this.context.updateLists();
          this.props.history.push('/');
        })
        .catch(error => {
            alert(error.toString());
        })
    }

    // Dynamic name updates
    updateName(name) {
        this.setState({foldername: {value: name, touched: true}});
    }

    // Folder name validation
    validateFolderName(fieldValue) {
        const name = this.state.foldername.value.trim();
        if (name.length === 0) {
          return 'Please give the folder a name';
        }
    }

    static contextType = Context; 

    render() {

        // Asterisk component
        const Required = () => (
        <span className="inputField__required">*</span>)

        return (

            <MainContentArea>
                <FormTitle>
                    Add a folder
                </FormTitle>
                <AddFolderForm onSubmit={this.handleSubmit}>
                    <FormLabel htmlFor="folderName">Folder name {' '} <Required/>
                    </FormLabel>
                    <FolderNameInput
                    type="text"
                    name="folderName"
                    id="folderName"
                    value={this.state.foldername.value}
                    onChange={e => this.updateName(e.target.value)}
                    required
                    >
                    </FolderNameInput>
                    {this.state.foldername.touched && (
                <ValidationError message={this.validateFolderName()} />
                )}  
                    <ButtonWrapper>
                    <AddFolderButton
                    type="submit" 
                    name="saveAddFolder" 
                    id="saveAddFolder"
                    onClick={(e) => {this.handleSubmit(e)}}
                    disabled={
                        this.validateFolderName()
                    }
                    >
                        <ButtonLabel>
                            Add folder
                        </ButtonLabel>
                    </AddFolderButton>
                    <CancelButton
                        type="button" 
                        name="cancelAddFolder" 
                        id="cancelAddFolder" 
                        onClick={() => {this.props.history.push('/')}}
                    >
                        <ButtonLabel>
                            Cancel
                        </ButtonLabel>
                    </CancelButton>
                    </ButtonWrapper>
                    
                </AddFolderForm>

            </MainContentArea>
        )
    }
}