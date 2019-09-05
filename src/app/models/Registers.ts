import myJSON from '../../data.json';
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
  constructor() {
    this.Prueba = parseInt(myJSON.Prueba);
    this.AIGAIN = parseInt(myJSON.AIGAIN);
    this.AVGAIN = parseInt(myJSON.AVGAIN);
    this.AV2GAIN = parseInt(myJSON.AV2GAIN);
    this.BIGAIN = parseInt(myJSON.BIGAIN);
    this.BVGAIN = parseInt(myJSON.BVGAIN);
    this.BV2GAIN = parseInt(myJSON.BV2GAIN);
    this.CIGAIN = parseInt(myJSON.CIGAIN);
    this.CVGAIN = parseInt(myJSON.CVGAIN);
    this.CV2GAIN = parseInt(myJSON.CV2GAIN);
    this.NIGAIN = parseInt(myJSON.NIGAIN);
    this.NVGAIN = parseInt(myJSON.NVGAIN);
    this.NV2GAIN = parseInt(myJSON.NV2GAIN);
    this.AIRMSOS = parseInt(myJSON.AIRMSOS);
    this.AVRMSOS = parseInt(myJSON.AVRMSOS);
    this.AV2RMSOS = parseInt(myJSON.AV2RMSOS);
    this.BIRMSOS = parseInt(myJSON.BIRMSOS);
    this.BVRMSOS = parseInt(myJSON.BVRMSOS);
    this.BV2RMSOS = parseInt(myJSON.BV2RMSOS);
    this.CIRMSOS = parseInt(myJSON.CIRMSOS);
    this.CVRMSOS = parseInt(myJSON.CVRMSOS);
    this.CV2RMSOS = parseInt(myJSON.CV2RMSOS);
    this.NIRMSOS = parseInt(myJSON.NIRMSOS);
    this.NVRMSOS = parseInt(myJSON.NVRMSOS);
    this.NV2RMSOS = parseInt(myJSON.NV2RMSOS);
    this.ISUMLVL = parseInt(myJSON.ISUMLVL);
    this.APGAIN = parseInt(myJSON.APGAIN);
    this.BPGAIN = parseInt(myJSON.BPGAIN);
    this.CPGAIN = parseInt(myJSON.CPGAIN);
    this.AWATTOS = parseInt(myJSON.AWATTOS);
    this.BWATTOS = parseInt(myJSON.BWATTOS);
    this.CWATTOS = parseInt(myJSON.CWATTOS);
    this.AVAROS = parseInt(myJSON.AVAROS);
    this.BVAROS = parseInt(myJSON.BVAROS);
    this.CVAROS = parseInt(myJSON.CVAROS);
    this.VLEVEL = parseInt(myJSON.VLEVEL);
    this.AFWATTOS = parseInt(myJSON.AFWATTOS);
    this.BFWATTOS = parseInt(myJSON.BFWATTOS);
    this.CFWATTOS = parseInt(myJSON.CFWATTOS);
    this.AFVAROS = parseInt(myJSON.AFVAROS);
    this.BFVAROS = parseInt(myJSON.BFVAROS);
    this.CFVAROS = parseInt(myJSON.CFVAROS);
    this.AFIRMSOS = parseInt(myJSON.AFIRMSOS);
    this.BFIRMSOS = parseInt(myJSON.BFIRMSOS);
    this.CFIRMSOS = parseInt(myJSON.CFIRMSOS);
    this.AFVRMSOS = parseInt(myJSON.AFVRMSOS);
    this.BFVRMSOS = parseInt(myJSON.BFVRMSOS);
    this.CFVRMSOS = parseInt(myJSON.CFVRMSOS);
    this.TEMPCO = parseInt(myJSON.TEMPCO);
    this.ATEMPo = parseInt(myJSON.ATEMPo);
    this.BTEMPo = parseInt(myJSON.BTEMPo);
    this.CTEMPo = parseInt(myJSON.CTEMPo);
    this.NTEMPo = parseInt(myJSON.NTEMPo);
    this.ATGAIN = parseInt(myJSON.ATGAIN);
    this.BTGAIN = parseInt(myJSON.BTGAIN);
    this.CTGAIN = parseInt(myJSON.CTGAIN);
    this.NTGAIN = parseInt(myJSON.NTGAIN);
    this.AIRMS = parseInt(myJSON.AIRMS);
    this.AVRMS = parseInt(myJSON.AVRMS);
    this.AV2RMS = parseInt(myJSON.AV2RMS);
    this.BIRMS = parseInt(myJSON.BIRMS);
    this.BVRMS = parseInt(myJSON.BVRMS);
    this.BV2RMS = parseInt(myJSON.BV2RMS);
    this.CIRMS = parseInt(myJSON.CIRMS);
    this.CVRMS = parseInt(myJSON.CVRMS);
    this.CV2RMS = parseInt(myJSON.CV2RMS);
    this.NIRMS = parseInt(myJSON.NIRMS);
    this.ISUM = parseInt(myJSON.ISUM);
    this.ATEMP = parseInt(myJSON.ATEMP);
    this.BTEMP = parseInt(myJSON.BTEMP);
    this.CTEMP = parseInt(myJSON.CTEMP);
    this.NTEMP = parseInt(myJSON.NTEMP);
    this.Run = parseInt(myJSON.Run);
    this.AWATTHR = parseInt(myJSON.AWATTHR);
    this.BWATTHR = parseInt(myJSON.BWATTHR);
    this.CWATTHR = parseInt(myJSON.CWATTHR);
    this.AFWATTHR = parseInt(myJSON.AFWATTHR);
    this.BFWATTHR = parseInt(myJSON.BFWATTHR);
    this.CFWATTHR = parseInt(myJSON.CFWATTHR);
    this.AVARHR = parseInt(myJSON.AVARHR);
    this.BVARHR = parseInt(myJSON.BVARHR);
    this.CVARHR = parseInt(myJSON.CVARHR);
    this.AFVARHR = parseInt(myJSON.AFVARHR);
    this.BFVARHR = parseInt(myJSON.BFVARHR);
    this.CFVARHR = parseInt(myJSON.CFVARHR);
    this.AVAHR = parseInt(myJSON.AVAHR);
    this.BVAHR = parseInt(myJSON.BVAHR);
    this.CVAHR = parseInt(myJSON.CVAHR);
    this.IPEAK = parseInt(myJSON.IPEAK);
    this.VPEAK = parseInt(myJSON.VPEAK);
    this.STATUS0 = parseInt(myJSON.STATUS0);
    this.STATUS1 = parseInt(myJSON.STATUS1);
    this.OILVL = parseInt(myJSON.OILVL);
    this.OVLVL = parseInt(myJSON.OVLVL);
    this.SAGLVL = parseInt(myJSON.SAGLVL);
    this.MASK0 = parseInt(myJSON.MASK0);
    this.MASK1 = parseInt(myJSON.MASK1);
    this.IAWV = parseInt(myJSON.IAWV);
    this.IBWV = parseInt(myJSON.IBWV);
    this.ICWV = parseInt(myJSON.ICWV);
    this.INWV = parseInt(myJSON.INWV);
    this.VAWV = parseInt(myJSON.VAWV);
    this.VBWV = parseInt(myJSON.VBWV);
    this.VCWV = parseInt(myJSON.VCWV);
    this.VA2WV = parseInt(myJSON.VA2WV);
    this.VB2WV = parseInt(myJSON.VB2WV);
    this.VC2WV = parseInt(myJSON.VC2WV);
    this.VNWV = parseInt(myJSON.VNWV);
    this.VN2WV = parseInt(myJSON.VN2WV);
    this.AWATT = parseInt(myJSON.AWATT);
    this.BWATT = parseInt(myJSON.BWATT);
    this.CWATT = parseInt(myJSON.CWATT);
    this.AVAR = parseInt(myJSON.AVAR);
    this.BVAR = parseInt(myJSON.BVAR);
    this.CVAR = parseInt(myJSON.CVAR);
    this.AVA = parseInt(myJSON.AVA);
    this.BVA = parseInt(myJSON.BVA);
    this.CVA = parseInt(myJSON.CVA);
    this.AVTHD = parseInt(myJSON.AVTHD);
    this.AITHD = parseInt(myJSON.AITHD);
    this.BVTHD = parseInt(myJSON.BVTHD);
    this.BITHD = parseInt(myJSON.BITHD);
    this.CVTHD = parseInt(myJSON.CVTHD);
    this.CITHD = parseInt(myJSON.CITHD);
    this.NVRMS = parseInt(myJSON.NVRMS);
    this.NV2RMS = parseInt(myJSON.NV2RMS);
    this.CHECKSUM = parseInt(myJSON.CHECKSUM);
    this.VNOM = parseInt(myJSON.VNOM);
    this.AFIRMS = parseInt(myJSON.AFIRMS);
    this.AFVRMS = parseInt(myJSON.AFVRMS);
    this.BFIRMS = parseInt(myJSON.BFIRMS);
    this.BFVRMS = parseInt(myJSON.BFVRMS);
    this.CFIRMS = parseInt(myJSON.CFIRMS);
    this.CFVRMS = parseInt(myJSON.CFVRMS);
    this.LAST_RWDATA32 = parseInt(myJSON.LAST_RWDATA32);
    this.PHSTATUS = parseInt(myJSON.PHSTATUS);
    this.ANGLE0 = parseInt(myJSON.ANGLE0);
    this.ANGLE1 = parseInt(myJSON.ANGLE1);
    this.ANGLE2 = parseInt(myJSON.ANGLE2);
    this.PHNOLOAD = parseInt(myJSON.PHNOLOAD);
    this.LINECYC = parseInt(myJSON.LINECYC);
    this.ZXTOUT = parseInt(myJSON.ZXTOUT);
    this.CAMPMODE = parseInt(myJSON.CAMPMODE);
    this.CFMODE = parseInt(myJSON.CFMODE);
    this.CF1DEN = parseInt(myJSON.CF1DEN);
    this.CF2DEN = parseInt(myJSON.CF2DEN);
    this.CF3DEN = parseInt(myJSON.CF3DEN);
    this.APHCAL = parseInt(myJSON.APHCAL);
    this.BPHCAL = parseInt(myJSON.BPHCAL);
    this.CPHCAL = parseInt(myJSON.CPHCAL);
    this.PHSING = parseInt(myJSON.PHSING);
    this.CONFIG = parseInt(myJSON.CONFIG);
    this.MMODE = parseInt(myJSON.MMODE);
    this.ACCMODE = parseInt(myJSON.ACCMODE);
    this.LCYCMODE = parseInt(myJSON.LCYCMODE);
    this.PEAKCYC = parseInt(myJSON.PEAKCYC);
    this.SAGCYC = parseInt(myJSON.SAGCYC);
    this.CFCYC = parseInt(myJSON.CFCYC);
    this.HSDC_CFG = parseInt(myJSON.HSDC_CFG);
    this.Version = parseInt(myJSON.Version);
    this.CONFIG3 = parseInt(myJSON.CONFIG3);
    this.ATEMPOS = parseInt(myJSON.ATEMPOS);
    this.BTEMPOS = parseInt(myJSON.BTEMPOS);
    this.CTEMPOS = parseInt(myJSON.CTEMPOS);
    this.NTEMPOS = parseInt(myJSON.NTEMPOS);
    this.LAST_RWDATA8 = parseInt(myJSON.LAST_RWDATA8);
    this.APF = parseInt(myJSON.APF);
    this.BPF = parseInt(myJSON.BPF);
    this.CPF = parseInt(myJSON.CPF);
    this.APERIOD = parseInt(myJSON.APERIOD);
    this.BPERIOD = parseInt(myJSON.BPERIOD);
    this.CPERIOD = parseInt(myJSON.CPERIOD);
    this.APNOLOAD = parseInt(myJSON.APNOLOAD);
    this.VARNOLOAD = parseInt(myJSON.VARNOLOAD);
    this.VANOLOAD = parseInt(myJSON.VANOLOAD);
    this.LAST_ADD = parseInt(myJSON.LAST_ADD);
    this.LAST_RWDATA16 = parseInt(myJSON.LAST_RWDATA16);
    this.CONFIG2 = parseInt(myJSON.CONFIG2);
    this.LAST_OP = parseInt(myJSON.LAST_OP);
    this.WTHR = parseInt(myJSON.WTHR);
    this.VARTHR = parseInt(myJSON.VARTHR);
    this.VATHR = parseInt(myJSON.VATHR);
  }
}