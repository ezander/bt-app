import MaterialTable from 'material-table'
import loadMonsters, { renderMonsterImage } from '../../components/bt1_monsters'
import Layout from '../../components/Layout'
import tableIcons from '../../components/tableIcons'


const Monsters = () => {
    const monsters = loadMonsters();
    const contents = <MaterialTable
        // title="Bard's Tale I - Monsters"
        title=""
        columns = {[
            {title: "Number", field: "dec"},
            {title: "Name", field: "name"},
            {title: "AC", field: "ac", type: "numeric"},
            {title: "HP min.", field: "hpMin"},
            {title: "HP max.", field: "hpMax"},
            {title: "Exp", field: "xp"},
            {title: "Max. Group", field: "group"},
            {title: "Special", field: "special"},
            {title: "Image", field: "image", render: rowData => 
                (rowData.image ? renderMonsterImage(rowData.image, true) : "") }
        ]}
        data = {monsters}
        icons = {tableIcons}
        options = {{
            paging: false,
            search: true,
            exportButton: true,
            padding: "dense",
        }}

    />

    return <Layout title="Monsters">
        {contents}
    </Layout>
}
export default Monsters