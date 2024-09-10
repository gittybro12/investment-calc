
export default function UserInput({onChange, UserInput}){
    return ( <section id="user-input">
    <div className="input-group">
        <p>
            <label htmlFor="">Initial Investment</label>
            <input type="number" value={UserInput.initialInvestment} required onChange={(e)=>{
               return onChange('initialInvestment', e.target.value)
            }}/>
        </p>
        <p>
            <label htmlFor="">Annual Investment</label>
            <input type="number" value={UserInput.annaulInvestment} onChange={(e)=>{
              return  onChange('annaulInvestment',e.target.value)
            }} required/>
        </p>
        </div>
       
        <div className="input-group">
        <p>
            <label htmlFor="">Expected Return</label>
            <input type="number" value={UserInput.expectedReturn} onChange={(e)=>{
               return onChange('expectedReturn',e.target.value)
            }} required />
        </p>
        <p>
            <label htmlFor="">Duration</label>
            <input type="number" value={UserInput.duration}onChange={(e)=>{
              return  onChange('duration',e.target.value)
            }}required />
        </p>
        </div>
    </section>
    )
}