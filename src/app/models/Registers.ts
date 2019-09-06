// import data from '../../../../data.json';
import { RegisterService } from '../services/register.service.js';
export class Register {
  public Prueba: number
  public AIGAIN: number
  public AVGAIN: number
  public AV2GAIN: number
  public BIGAIN: number
  public BVGAIN: number
  public BV2GAIN: number
  public CIGAIN: number
  public CVGAIN: number
  public CV2GAIN: number
  public NIGAIN: number
  public NVGAIN: number
  public NV2GAIN: number
  public AIRMSOS: number
  public AVRMSOS: number
  public AV2RMSOS: number
  public BIRMSOS: number
  public BVRMSOS: number
  public BV2RMSOS: number
  public CIRMSOS: number
  public CVRMSOS: number
  public CV2RMSOS: number
  public NIRMSOS: number
  public NVRMSOS: number
  public NV2RMSOS: number
  public ISUMLVL: number
  public APGAIN: number
  public BPGAIN: number
  public CPGAIN: number
  public AWATTOS: number
  public BWATTOS: number
  public CWATTOS: number
  public AVAROS: number
  public BVAROS: number
  public CVAROS: number
  public VLEVEL: number
  public AFWATTOS: number
  public BFWATTOS: number
  public CFWATTOS: number
  public AFVAROS: number
  public BFVAROS: number
  public CFVAROS: number
  public AFIRMSOS: number
  public BFIRMSOS: number
  public CFIRMSOS: number
  public AFVRMSOS: number
  public BFVRMSOS: number
  public CFVRMSOS: number
  public TEMPCO: number
  public ATEMPo: number
  public BTEMPo: number
  public CTEMPo: number
  public NTEMPo: number
  public ATGAIN: number
  public BTGAIN: number
  public CTGAIN: number
  public NTGAIN: number
  public AIRMS: number
  public AVRMS: number
  public AV2RMS: number
  public BIRMS: number
  public BVRMS: number
  public BV2RMS: number
  public CIRMS: number
  public CVRMS: number
  public CV2RMS: number
  public NIRMS: number
  public ISUM: number
  public ATEMP: number
  public BTEMP: number
  public CTEMP: number
  public NTEMP: number
  public Run: number
  public AWATTHR: number
  public BWATTHR: number
  public CWATTHR: number
  public AFWATTHR: number
  public BFWATTHR: number
  public CFWATTHR: number
  public AVARHR: number
  public BVARHR: number
  public CVARHR: number
  public AFVARHR: number
  public BFVARHR: number
  public CFVARHR: number
  public AVAHR: number
  public BVAHR: number
  public CVAHR: number
  public IPEAK: number
  public VPEAK: number
  public STATUS0: number
  public STATUS1: number
  public OILVL: number
  public OVLVL: number
  public SAGLVL: number
  public MASK0: number
  public MASK1: number
  public IAWV: number
  public IBWV: number
  public ICWV: number
  public INWV: number
  public VAWV: number
  public VBWV: number
  public VCWV: number
  public VA2WV: number
  public VB2WV: number
  public VC2WV: number
  public VNWV: number
  public VN2WV: number
  public AWATT: number
  public BWATT: number
  public CWATT: number
  public AVAR: number
  public BVAR: number
  public CVAR: number
  public AVA: number
  public BVA: number
  public CVA: number
  public AVTHD: number
  public AITHD: number
  public BVTHD: number
  public BITHD: number
  public CVTHD: number
  public CITHD: number
  public NVRMS: number
  public NV2RMS: number
  public CHECKSUM: number
  public VNOM: number
  public AFIRMS: number
  public AFVRMS: number
  public BFIRMS: number
  public BFVRMS: number
  public CFIRMS: number
  public CFVRMS: number
  public LAST_RWDATA32: number
  public PHSTATUS: number
  public ANGLE0: number
  public ANGLE1: number
  public ANGLE2: number
  public PHNOLOAD: number
  public LINECYC: number
  public ZXTOUT: number
  public CAMPMODE: number
  public CFMODE: number
  public CF1DEN: number
  public CF2DEN: number
  public CF3DEN: number
  public APHCAL: number
  public BPHCAL: number
  public CPHCAL: number
  public PHSING: number
  public CONFIG: number
  public MMODE: number
  public ACCMODE: number
  public LCYCMODE: number
  public PEAKCYC: number
  public SAGCYC: number
  public CFCYC: number
  public HSDC_CFG: number
  public Version: number
  public CONFIG3: number
  public ATEMPOS: number
  public BTEMPOS: number
  public CTEMPOS: number
  public NTEMPOS: number
  public LAST_RWDATA8: number
  public APF: number
  public BPF: number
  public CPF: number
  public APERIOD: number
  public BPERIOD: number
  public CPERIOD: number
  public APNOLOAD: number
  public VARNOLOAD: number
  public VANOLOAD: number
  public LAST_ADD: number
  public LAST_RWDATA16: number
  public CONFIG2: number
  public LAST_OP: number
  public WTHR: number
  public VARTHR: number
  public VATHR: number
  constructor(private registerService: RegisterService) {
    console.log("Dsdsdfj")

    // this.registerService.getRegister().
    //   subscribe( (data:any) => {
    //     console.log(data)
    //     this.Prueba = parseInt(data.Prueba);
    //     this.AIGAIN = parseInt(data.AIGAIN);
    //     this.AVGAIN = parseInt(data.AVGAIN);
    //     this.AV2GAIN = parseInt(data.AV2GAIN);
    //     this.BIGAIN = parseInt(data.BIGAIN);
    //     this.BVGAIN = parseInt(data.BVGAIN);
    //     this.BV2GAIN = parseInt(data.BV2GAIN);
    //     this.CIGAIN = parseInt(data.CIGAIN);
    //     this.CVGAIN = parseInt(data.CVGAIN);
    //     this.CV2GAIN = parseInt(data.CV2GAIN);
    //     this.NIGAIN = parseInt(data.NIGAIN);
    //     this.NVGAIN = parseInt(data.NVGAIN);
    //     this.NV2GAIN = parseInt(data.NV2GAIN);
    //     this.AIRMSOS = parseInt(data.AIRMSOS);
    //     this.AVRMSOS = parseInt(data.AVRMSOS);
    //     this.AV2RMSOS = parseInt(data.AV2RMSOS);
    //     this.BIRMSOS = parseInt(data.BIRMSOS);
    //     this.BVRMSOS = parseInt(data.BVRMSOS);
    //     this.BV2RMSOS = parseInt(data.BV2RMSOS);
    //     this.CIRMSOS = parseInt(data.CIRMSOS);
    //     this.CVRMSOS = parseInt(data.CVRMSOS);
    //     this.CV2RMSOS = parseInt(data.CV2RMSOS);
    //     this.NIRMSOS = parseInt(data.NIRMSOS);
    //     this.NVRMSOS = parseInt(data.NVRMSOS);
    //     this.NV2RMSOS = parseInt(data.NV2RMSOS);
    //     this.ISUMLVL = parseInt(data.ISUMLVL);
    //     this.APGAIN = parseInt(data.APGAIN);
    //     this.BPGAIN = parseInt(data.BPGAIN);
    //     this.CPGAIN = parseInt(data.CPGAIN);
    //     this.AWATTOS = parseInt(data.AWATTOS);
    //     this.BWATTOS = parseInt(data.BWATTOS);
    //     this.CWATTOS = parseInt(data.CWATTOS);
    //     this.AVAROS = parseInt(data.AVAROS);
    //     this.BVAROS = parseInt(data.BVAROS);
    //     this.CVAROS = parseInt(data.CVAROS);
    //     this.VLEVEL = parseInt(data.VLEVEL);
    //     this.AFWATTOS = parseInt(data.AFWATTOS);
    //     this.BFWATTOS = parseInt(data.BFWATTOS);
    //     this.CFWATTOS = parseInt(data.CFWATTOS);
    //     this.AFVAROS = parseInt(data.AFVAROS);
    //     this.BFVAROS = parseInt(data.BFVAROS);
    //     this.CFVAROS = parseInt(data.CFVAROS);
    //     this.AFIRMSOS = parseInt(data.AFIRMSOS);
    //     this.BFIRMSOS = parseInt(data.BFIRMSOS);
    //     this.CFIRMSOS = parseInt(data.CFIRMSOS);
    //     this.AFVRMSOS = parseInt(data.AFVRMSOS);
    //     this.BFVRMSOS = parseInt(data.BFVRMSOS);
    //     this.CFVRMSOS = parseInt(data.CFVRMSOS);
    //     this.TEMPCO = parseInt(data.TEMPCO);
    //     this.ATEMPo = parseInt(data.ATEMPo);
    //     this.BTEMPo = parseInt(data.BTEMPo);
    //     this.CTEMPo = parseInt(data.CTEMPo);
    //     this.NTEMPo = parseInt(data.NTEMPo);
    //     this.ATGAIN = parseInt(data.ATGAIN);
    //     this.BTGAIN = parseInt(data.BTGAIN);
    //     this.CTGAIN = parseInt(data.CTGAIN);
    //     this.NTGAIN = parseInt(data.NTGAIN);
    //     this.AIRMS = parseInt(data.AIRMS);
    //     this.AVRMS = parseInt(data.AVRMS);
    //     this.AV2RMS = parseInt(data.AV2RMS);
    //     this.BIRMS = parseInt(data.BIRMS);
    //     this.BVRMS = parseInt(data.BVRMS);
    //     this.BV2RMS = parseInt(data.BV2RMS);
    //     this.CIRMS = parseInt(data.CIRMS);
    //     this.CVRMS = parseInt(data.CVRMS);
    //     this.CV2RMS = parseInt(data.CV2RMS);
    //     this.NIRMS = parseInt(data.NIRMS);
    //     this.ISUM = parseInt(data.ISUM);
    //     this.ATEMP = parseInt(data.ATEMP);
    //     this.BTEMP = parseInt(data.BTEMP);
    //     this.CTEMP = parseInt(data.CTEMP);
    //     this.NTEMP = parseInt(data.NTEMP);
    //     this.Run = parseInt(data.Run);
    //     this.AWATTHR = parseInt(data.AWATTHR);
    //     this.BWATTHR = parseInt(data.BWATTHR);
    //     this.CWATTHR = parseInt(data.CWATTHR);
    //     this.AFWATTHR = parseInt(data.AFWATTHR);
    //     this.BFWATTHR = parseInt(data.BFWATTHR);
    //     this.CFWATTHR = parseInt(data.CFWATTHR);
    //     this.AVARHR = parseInt(data.AVARHR);
    //     this.BVARHR = parseInt(data.BVARHR);
    //     this.CVARHR = parseInt(data.CVARHR);
    //     this.AFVARHR = parseInt(data.AFVARHR);
    //     this.BFVARHR = parseInt(data.BFVARHR);
    //     this.CFVARHR = parseInt(data.CFVARHR);
    //     this.AVAHR = parseInt(data.AVAHR);
    //     this.BVAHR = parseInt(data.BVAHR);
    //     this.CVAHR = parseInt(data.CVAHR);
    //     this.IPEAK = parseInt(data.IPEAK);
    //     this.VPEAK = parseInt(data.VPEAK);
    //     this.STATUS0 = parseInt(data.STATUS0);
    //     this.STATUS1 = parseInt(data.STATUS1);
    //     this.OILVL = parseInt(data.OILVL);
    //     this.OVLVL = parseInt(data.OVLVL);
    //     this.SAGLVL = parseInt(data.SAGLVL);
    //     this.MASK0 = parseInt(data.MASK0);
    //     this.MASK1 = parseInt(data.MASK1);
    //     this.IAWV = parseInt(data.IAWV);
    //     this.IBWV = parseInt(data.IBWV);
    //     this.ICWV = parseInt(data.ICWV);
    //     this.INWV = parseInt(data.INWV);
    //     this.VAWV = parseInt(data.VAWV);
    //     this.VBWV = parseInt(data.VBWV);
    //     this.VCWV = parseInt(data.VCWV);
    //     this.VA2WV = parseInt(data.VA2WV);
    //     this.VB2WV = parseInt(data.VB2WV);
    //     this.VC2WV = parseInt(data.VC2WV);
    //     this.VNWV = parseInt(data.VNWV);
    //     this.VN2WV = parseInt(data.VN2WV);
    //     this.AWATT = parseInt(data.AWATT);
    //     this.BWATT = parseInt(data.BWATT);
    //     this.CWATT = parseInt(data.CWATT);
    //     this.AVAR = parseInt(data.AVAR);
    //     this.BVAR = parseInt(data.BVAR);
    //     this.CVAR = parseInt(data.CVAR);
    //     this.AVA = parseInt(data.AVA);
    //     this.BVA = parseInt(data.BVA);
    //     this.CVA = parseInt(data.CVA);
    //     this.AVTHD = parseInt(data.AVTHD);
    //     this.AITHD = parseInt(data.AITHD);
    //     this.BVTHD = parseInt(data.BVTHD);
    //     this.BITHD = parseInt(data.BITHD);
    //     this.CVTHD = parseInt(data.CVTHD);
    //     this.CITHD = parseInt(data.CITHD);
    //     this.NVRMS = parseInt(data.NVRMS);
    //     this.NV2RMS = parseInt(data.NV2RMS);
    //     this.CHECKSUM = parseInt(data.CHECKSUM);
    //     this.VNOM = parseInt(data.VNOM);
    //     this.AFIRMS = parseInt(data.AFIRMS);
    //     this.AFVRMS = parseInt(data.AFVRMS);
    //     this.BFIRMS = parseInt(data.BFIRMS);
    //     this.BFVRMS = parseInt(data.BFVRMS);
    //     this.CFIRMS = parseInt(data.CFIRMS);
    //     this.CFVRMS = parseInt(data.CFVRMS);
    //     this.LAST_RWDATA32 = parseInt(data.LAST_RWDATA32);
    //     this.PHSTATUS = parseInt(data.PHSTATUS);
    //     this.ANGLE0 = parseInt(data.ANGLE0);
    //     this.ANGLE1 = parseInt(data.ANGLE1);
    //     this.ANGLE2 = parseInt(data.ANGLE2);
    //     this.PHNOLOAD = parseInt(data.PHNOLOAD);
    //     this.LINECYC = parseInt(data.LINECYC);
    //     this.ZXTOUT = parseInt(data.ZXTOUT);
    //     this.CAMPMODE = parseInt(data.CAMPMODE);
    //     this.CFMODE = parseInt(data.CFMODE);
    //     this.CF1DEN = parseInt(data.CF1DEN);
    //     this.CF2DEN = parseInt(data.CF2DEN);
    //     this.CF3DEN = parseInt(data.CF3DEN);
    //     this.APHCAL = parseInt(data.APHCAL);
    //     this.BPHCAL = parseInt(data.BPHCAL);
    //     this.CPHCAL = parseInt(data.CPHCAL);
    //     this.PHSING = parseInt(data.PHSING);
    //     this.CONFIG = parseInt(data.CONFIG);
    //     this.MMODE = parseInt(data.MMODE);
    //     this.ACCMODE = parseInt(data.ACCMODE);
    //     this.LCYCMODE = parseInt(data.LCYCMODE);
    //     this.PEAKCYC = parseInt(data.PEAKCYC);
    //     this.SAGCYC = parseInt(data.SAGCYC);
    //     this.CFCYC = parseInt(data.CFCYC);
    //     this.HSDC_CFG = parseInt(data.HSDC_CFG);
    //     this.Version = parseInt(data.Version);
    //     this.CONFIG3 = parseInt(data.CONFIG3);
    //     this.ATEMPOS = parseInt(data.ATEMPOS);
    //     this.BTEMPOS = parseInt(data.BTEMPOS);
    //     this.CTEMPOS = parseInt(data.CTEMPOS);
    //     this.NTEMPOS = parseInt(data.NTEMPOS);
    //     this.LAST_RWDATA8 = parseInt(data.LAST_RWDATA8);
    //     this.APF = parseInt(data.APF);
    //     this.BPF = parseInt(data.BPF);
    //     this.CPF = parseInt(data.CPF);
    //     this.APERIOD = parseInt(data.APERIOD);
    //     this.BPERIOD = parseInt(data.BPERIOD);
    //     this.CPERIOD = parseInt(data.CPERIOD);
    //     this.APNOLOAD = parseInt(data.APNOLOAD);
    //     this.VARNOLOAD = parseInt(data.VARNOLOAD);
    //     this.VANOLOAD = parseInt(data.VANOLOAD);
    //     this.LAST_ADD = parseInt(data.LAST_ADD);
    //     this.LAST_RWDATA16 = parseInt(data.LAST_RWDATA16);
    //     this.CONFIG2 = parseInt(data.CONFIG2);
    //     this.LAST_OP = parseInt(data.LAST_OP);
    //     this.WTHR = parseInt(data.WTHR);
    //     this.VARTHR = parseInt(data.VARTHR);
    //     this.VATHR = parseInt(data.VATHR);

    //   })


  }
}