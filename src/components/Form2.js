import { Component } from 'react';
import FormElement from './reusable/FormElement';
import FormElement2 from './reusable/FormElement2';

export class LuxuryCarsForm2 extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      url: '',
    };

    this.handlesubmit = this.handlesubmit.bind(this);
  }

  handlesubmit(e) {
    e.preventDefault();
    this.props.addAnotherLuxury(this.state);
    this.setState({
      name: '',
      url: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.handlesubmit}>
        <div>
          <FormElement
            type="text"
            className="form-control"
            name="name"
            id="name"
            value={this.state.name}
            placeholder="enter a car name"
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }}
          />
        </div>

        <div>
          <FormElement
            onChange={(e) => {
              this.setState({
                url: e.target.value,
              });
            }}
            type="url"
            name="url"
            value={this.state.url}
            id="url"
            placeholder="enter a car url/link"
          />
        </div>

        <div>
          <FormElement type="submit" value="submit" />
        </div>
      </form>
    );
  }
}

export class SuperCarsForm2 extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      url: '',
    };

    this.handlesubmit = this.handlesubmit.bind(this);
  }

  handlesubmit(e) {
    e.preventDefault();
    this.props.addSuperCars(this.state);
    this.setState({
      name: '',
      url: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.handlesubmit}>
        <div>
          <FormElement2
            type="text"
            className="form-control"
            name="name"
            id="name"
            value={this.state.name}
            placeholder="enter a car name"
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }}
          />
        </div>

        <div>
          <FormElement2
            onChange={(e) => {
              this.setState({
                url: e.target.value,
              });
            }}
            type="url"
            name="url"
            value={this.state.url}
            id="url"
            placeholder="enter a car url/link"
          />
        </div>

        <div>
          <FormElement2 type="submit" value="submit" />
        </div>
      </form>
    );
  }
}
