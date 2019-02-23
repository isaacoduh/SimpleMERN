import React, {Component} from 'react';
import axios from 'axios';

export default class Create extends Component {
    constructor(props){
        super(props);
        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
        this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            person_name: '',
            business_name: '',
            business_gst_number: ''
        }
    }
    onChangePersonName(e){
        this.setState({
            person_name: e.target.value
        });
    }
    onChangeBusinessName(e){
        this.setState({
            business_name: e.target.value
        });
    }
    onChangeGstNumber(e){
        this.setState({
            business_gst_number: e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        console.log(`The values are ${this.state.person_name}, ${this.state.business_name}, and ${this.state.business_gst_number}`)
        const obj = {
            person_name: this.state.person_name,
            business_name: this.state.business_name,
            business_gst_number: this.state.business_gst_number
        };
        axios.post('http://localhost:4000/business/add', obj).then(res => console.log(res.data));
        this.setState({
            person_name: '',
            business_name: '',
            business_gst_number: ''
        })
    }
    render(){
        return (
            <div style={{marginTop: 10}}>
                <h3>Add New Business</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Person Name: </label>
                        <input type="text" value={this.state.person_name}
                        onChange={this.onChangePersonName} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Add Business Name: </label>
                        <input type="text" 
                        className="form-control"
                        value={this.state.business_name}
                        onChange={this.onChangeBusinessName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add GST Number: </label>
                        <input type="text" 
                        className="form-control"
                        value={this.state.business_gst_number}
                        onChange={this.onChangeGstNumber}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Business" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
/**
 * Okay, now we have three fields.

person name
business name
gst number
So we need to create four functions that can track the values of the textbox and set that state according to it. Also, the fourth function will send the POST request to the node express server.

Now, first, we will define the constructor and set the initial state and then also bind this to the different events inside the constructor.

Then define the different functions with each input text values. So when the user types inside the textbox, we set the state according to it.

So, let say, the user is typing the person name inside the textbox, we are changing the state value of person name. Finally, same for all of the inputs and when we submit the form, we get the values from the state and send to the POST request.
 */