import { Male, Female, NonBinary } from "./components/icons/gender"
import { Valid } from "./components/icons/validation"
import { genderState, verfiState } from "./type"


/**
* Handles the rendering of the profile's gender icon based on the provided gender state.
*
* @returns A React component representing the profile's gender icon.
*/
export const handleGender = (gender: genderState) => {
    switch (gender) {
        case genderState.male:
        return <Male />
        case genderState.female:
        return <Female />
        case genderState.nonBinary:
        return <NonBinary />
    }
}


/**
* Handles the rendering of the profile's verification state icon based on the provided verification state.
*
* @returns A React component representing the profile's verification state icon.
*/
export const handleVerifState = (verif: verfiState) => {
    switch (verif) {
        case verfiState.noVerif:
            return <div className="verif__state unverified">
            </div>
        case verfiState.waitingFor:
            return <div className="verif__state waiting">
                <Valid />
            </div>
        case verfiState.verified:
            return <div className="verif__state verified">
                <Valid />
            </div>
    }
}
