import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

//Configure enzyme -> accepts an object that one can set the adapter
Enzyme.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true
})