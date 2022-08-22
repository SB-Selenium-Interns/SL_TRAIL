import * as EV from '../Common/Environment.js';
import * as R from '../Common/TD.js';
import * as RS from '../Common/LG.js';
import * as CB from '../Common/closeBrowser.js';

import * as LG from '../PO_Lib/Login.js';
import * as HM from '../PO_Lib/Home.js';
import * as SP from '../PO_Lib/SL_PD.js';
import * as SM from '../PO_Lib/SL_MT.js';
import * as BU from '../PO_Lib/BY_ML.js';
import * as BU1 from '../PO_Lib/BY_MT.js';


var ENV_Type = process.argv[2];
var ENV_Type1 = process.argv[3];
export const TC_Sample = async(ENV_Type,ENV_Type1)=>{
    await EV.Launcapp(ENV_Type, ENV_Type1)

    // await LG.Login_VB(await R.RT("TC_005", "DataSet1", "BY1_UID"), await R.RT("TC_005", "DataSet1", "BY1_PWD"));
    // await BU1.Connect_SL (
    // await R.RT("TC_005", "DataSet1", "MI"))
    // await HM.Logout_VB()
    await LG.Login_VB(await R.RT("TC_005", "DataSet1", "SE1_UID"), await R.RT("TC_005", "DataSet1", "SE1_PWD"));
    await SM.Accept_BY(
    await R.RT("TC_005", "DataSet1", "CG_PD"))
    await HM.Logout_VB()
    
}
TC_Sample(ENV_Type,ENV_Type1);
