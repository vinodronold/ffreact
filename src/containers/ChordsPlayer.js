import ChordsPlayerLayout from '../components/ChordsPlayerLayout'
import { connect } from 'react-redux'

// const mapStateToProps = state => {
//     return ({
//         drawer: state.drawer
//     }
// )
// }
// const mapDispatchToProps = dispatch => {
//     return {
//         toggleDrawer: () => {
//             dispatch(toggleDrawer)
//         }
//     }
// }

const ChordsPlayer = connect(null, null)(ChordsPlayerLayout)

export default ChordsPlayer