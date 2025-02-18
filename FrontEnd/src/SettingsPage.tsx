import { ME } from "./App"
import { CTA } from "./components/CTA"
import { Block } from "./components/icons/block"
import { Right } from "./components/icons/chevron"
import { Edit } from "./components/icons/edit"
import { Invalid } from "./components/icons/validation"
import { AgeSelector } from "./components/SliderSelector"
import { SwipePrecision } from "./components/SwipePrecisions"
import { SwitchSelector } from "./components/SwitchSelector"
import { Toggle } from "./components/Toggle"
import "./Settings.css"


export const SettingsPage = () => {
    return <section className="settings__page">
    <AgeSelector current={ME.lookFor.age} />
    <SwitchSelector current={ME.lookFor.gender} />
    <SwipePrecision noTotal title={"Précisions des utilisateurs"} total={10594} accuracy={2382} />
    <Toggle current={ME.lookFor.isIncognito}>Mode incognito</Toggle>
    <div>
    <CTA iconRight={<Block />}>Personne bloquer</CTA>
    <CTA iconRight={<Edit />}>Changer mes infos</CTA>
    <CTA iconRight={<Right />}>Politique de confidentialité</CTA>
    <CTA iconRight={<Invalid />} danger>Supprimer mon compte</CTA>
    <CTA iconRight={<Invalid />} danger>Deconnexion</CTA>
    </div>
    </section>
}
