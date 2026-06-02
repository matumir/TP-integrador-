
import {Link} from 'react-router-dom';
export default function Sidebar({links}){
return <div style={{width:220,padding:20,background:'#111',minHeight:'100vh'}}>
<h2 style={{color:'white'}}>Congreso</h2>
{links.map(l=><div key={l.path}><Link style={{color:'white'}} to={l.path}>{l.label}</Link></div>)}
</div>
}
