import React,{Component} from "react";

class ContactBook extends Component{
    constructor(props){
        super(props);
        this.state={
            contacts:[],
            fname:"",
            lname:"",
            phone:"",

        };
    }

    handlefnameChange=(e)=>{
        this.setState({fname:e.target.value});
    };
    handlelnameChange=(e)=>{
        this.setState({lname:e.target.value});
    };
    handlephoneChange=(e)=>{
        this.setState({phone:e.target.value});
    };

    addContact=()=>{
        if(this.state.fname.trim()===""|| this.state.lname.trim()===""|| this.state.phone.trim()===""){
            return;
        }
        const newContact = {
            id: Date.now(),
            fname: this.state.fname,
            lname: this.state.lname,
            phone: this.state.phone,
            visible: false,
        };

        this.setState((prevState)=>({
            contacts:[newContact,...prevState.contacts],
            fname:"",
            lname:"",
            phone:"",
        }));

    };

    toggleDisplay=(id)=>{
        this.setState((prevState)=>({
            contacts:prevState.contacts.map((y)=>
                y.id===id ? {...y, visible: !y.visible} : y
            ),
        }));
    };

    deleteContact=(id)=>{
        this.setState((prevState)=>({
            contacts:prevState.contacts.filter((y)=> y.id !== id),
        }));
    };

        
    render(){
        const {contacts,fname,lname,phone}=this.state;
        return(
            <>
            <div>
                <h1>Contact Book</h1>

                <input type="text" value={fname} placeholder="First Name" onChange={this.handlefnameChange} />
                <br />
                <input type="text" value={lname} placeholder="Last Name" onChange={this.handlelnameChange} />
                <br />
                <input type="text" value={phone} placeholder="Mobile number" onChange={this.handlephoneChange} />
                <br />
                <button onClick={this.addContact}>Add Contact</button>
                <br />

                <ul>
                    {contacts.map((y) => (
                        <li key={y.id}>
                            {y.fname} {":"} <button onClick={()=>this.toggleDisplay(y.id)}>View</button> <button onClick={()=>this.deleteContact(y.id)}>Delete</button>
                            <div style={{display: y.visible ? "" : "none"}}>
                                {y.lname} {"-"} {y.phone}
                            </div>
                        </li> 
                    ))}
                </ul>

                

                
            </div>
            </>
        )
    }
};
    

export default ContactBook;