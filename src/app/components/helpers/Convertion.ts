import { Metering } from "../../models/Metering";
import { Register } from 'src/app/models/Registers.js';
import { Phase } from 'src/app/models/Phase.js';
import { Meter } from 'src/app/models/Meter.js';
import { RegisterService } from 'src/app/services/register.service';

export class Convertion {

  constructor(private registerService: RegisterService) {

  }

  getMetering(): Metering 
  {
    let metering = new Metering()
    let registers = new Register(this.registerService)
    console.log('registro getMEteron ', registers)
    metering.phaseA = this.parsePhaseA(metering.phaseA, registers)
    metering.phaseB = this.parsePhaseB(metering.phaseB, registers)
    metering.phaseC = this.parsePhaseC(metering.phaseC, registers)
    metering.phaseN = this.parsePhaseN(metering.phaseN, registers)
    metering.meter = this.parseMeter(metering.meter, registers)
    console.log(metering)
    return metering;
  }

  parsePhaseA(phaseA: Phase, register:Register): Phase
  {
    console.log('registro A ', register)
    phaseA.IGAIN = register.AIGAIN
    phaseA.VGAIN = register.AVGAIN
    phaseA.V2GAIN = register.AV2GAIN
    phaseA.IRMSOS = register.AIRMSOS
    phaseA.VRMSOS = register.AVRMSOS
    phaseA.V2RMSOS = register.AV2RMSOS
    phaseA.PGAIN = register.APGAIN
    phaseA.WATTOS = register.AWATTOS
    phaseA.VAROS = register.AVAROS
    phaseA.FWATTOS = register.AFWATTOS
    phaseA.FVAROS = register.AFVAROS
    phaseA.FIRMSOS = register.AFIRMSOS
    phaseA.FVRMSOS = register.AFVRMSOS
    phaseA.TGAIN = register.ATGAIN
    phaseA.IRMS = register.AIRMS
    phaseA.VRMS = register.AVRMS
    phaseA.V2RMS = register.AV2RMS
    phaseA.TEMP = register.ATEMP
    phaseA.WATTHR = register.AWATTHR
    phaseA.FWATTHR = register.AFWATTHR
    phaseA.VARHR = register.AVARHR
    phaseA.FVARHR = register.AFVARHR
    phaseA.VAHR = register.AVAHR
    phaseA.WATT = register.AWATT
    phaseA.VAR = register.AVAR
    phaseA.VA = register.AVA
    phaseA.VTHD = register.AVTHD
    phaseA.ITHD = register.AITHD
    phaseA.FIRMS = register.AFIRMS
    phaseA.FVRMS = register.AFVRMS
    phaseA.PHCAL = register.APHCAL
    phaseA.TEMPOS = register.ATEMPOS
    phaseA.PF = register.APF
    phaseA.PERIOD = register.APERIOD
    phaseA.IWV = register.IAWV
    phaseA.VWV = register.VAWV
    phaseA.V2WV = register.VA2WV
    console.log(phaseA)
    return phaseA
  }

  parsePhaseB(phaseB: Phase, register:Register): Phase
  {
    phaseB.IGAIN = register.BIGAIN
    phaseB.VGAIN = register.BVGAIN
    phaseB.V2GAIN = register.BV2GAIN
    phaseB.IRMSOS = register.BIRMSOS
    phaseB.VRMSOS = register.BVRMSOS
    phaseB.V2RMSOS = register.BV2RMSOS
    phaseB.PGAIN = register.BPGAIN
    phaseB.WATTOS = register.BWATTOS
    phaseB.VAROS = register.BVAROS
    phaseB.FWATTOS = register.BFWATTOS
    phaseB.FVAROS = register.BFVAROS
    phaseB.FIRMSOS = register.BFIRMSOS
    phaseB.FVRMSOS = register.BFVRMSOS
    phaseB.TGAIN = register.BTGAIN
    phaseB.IRMS = register.BIRMS
    phaseB.VRMS = register.BVRMS
    phaseB.V2RMS = register.BV2RMS
    phaseB.TEMP = register.BTEMP
    phaseB.WATTHR = register.BWATTHR
    phaseB.FWATTHR = register.BFWATTHR
    phaseB.VARHR = register.BVARHR
    phaseB.FVARHR = register.BFVARHR
    phaseB.VAHR = register.BVAHR
    phaseB.WATT = register.BWATT
    phaseB.VAR = register.BVAR
    phaseB.VA = register.BVA
    phaseB.VTHD = register.BVTHD
    phaseB.ITHD = register.BITHD
    phaseB.FIRMS = register.BFIRMS
    phaseB.FVRMS = register.BFVRMS
    phaseB.PHCAL = register.BPHCAL
    phaseB.TEMPOS = register.BTEMPOS
    phaseB.PF = register.BPF
    phaseB.PERIOD = register.BPERIOD
    phaseB.IWV = register.IBWV
    phaseB.VWV = register.VBWV
    phaseB.V2WV = register.VB2WV
    return phaseB
  }

  parsePhaseC(phaseC: Phase, register:Register): Phase
  {
    phaseC.IGAIN = register.CIGAIN
    phaseC.VGAIN = register.CVGAIN
    phaseC.V2GAIN = register.CV2GAIN
    phaseC.IRMSOS = register.CIRMSOS
    phaseC.VRMSOS = register.CVRMSOS
    phaseC.V2RMSOS = register.CV2RMSOS
    phaseC.PGAIN = register.CPGAIN
    phaseC.WATTOS = register.CWATTOS
    phaseC.VAROS = register.CVAROS
    phaseC.FWATTOS = register.CFWATTOS
    phaseC.FVAROS = register.CFVAROS
    phaseC.FIRMSOS = register.CFIRMSOS
    phaseC.FVRMSOS = register.CFVRMSOS
    phaseC.TGAIN = register.CTGAIN
    phaseC.IRMS = register.CIRMS
    phaseC.VRMS = register.CVRMS
    phaseC.V2RMS = register.CV2RMS
    phaseC.TEMP = register.CTEMP
    phaseC.WATTHR = register.CWATTHR
    phaseC.FWATTHR = register.CFWATTHR
    phaseC.VARHR = register.CVARHR
    phaseC.FVARHR = register.CFVARHR
    phaseC.VAHR = register.CVAHR
    phaseC.WATT = register.CWATT
    phaseC.VAR = register.CVAR
    phaseC.VA = register.CVA
    phaseC.VTHD = register.CVTHD
    phaseC.ITHD = register.CITHD
    phaseC.FIRMS = register.CFIRMS
    phaseC.FVRMS = register.CFVRMS
    phaseC.PHCAL = register.CPHCAL
    phaseC.TEMPOS = register.CTEMPOS
    phaseC.PF = register.CPF
    phaseC.PERIOD = register.CPERIOD
    phaseC.IWV = register.ICWV
    phaseC.VWV = register.VCWV
    phaseC.V2WV = register.VC2WV
    return phaseC
  }

  parsePhaseN(phaseN: Phase, register:Register): Phase
  {
    phaseN.IGAIN = register.NIGAIN
    phaseN.VGAIN = register.NVGAIN
    phaseN.V2GAIN = register.NV2GAIN
    phaseN.IRMSOS = register.NIRMSOS
    phaseN.VRMSOS = register.NVRMSOS
    phaseN.V2RMSOS = register.NV2RMSOS
    phaseN.TGAIN = register.NTGAIN
    phaseN.IRMS = register.NIRMS
    phaseN.VRMS = register.NVRMS
    phaseN.V2RMS = register.NV2RMS
    phaseN.TEMP = register.NTEMP
    phaseN.TEMPOS = register.NTEMPOS
    phaseN.IWV = register.INWV
    phaseN.VWV = register.VNWV
    phaseN.V2WV = register.VN2WV
    return phaseN
  }

  parseMeter(meter: Meter, register: Register): Meter
  {
    meter.ISUMLVL = register.ISUMLVL
    meter.TEMPCO = register.TEMPCO
    meter.Run = register.Run
    meter.IPEAK = register.IPEAK
    meter.VPEAK = register.VPEAK
    meter.STATUS0 = register.STATUS0
    meter.STATUS1 = register.STATUS1
    meter.OILVL = register.OILVL
    meter.OVLVL = register.OVLVL
    meter.SAGLVL = register.SAGLVL
    meter.MASK0 = register.MASK0
    meter.MASK1 = register.MASK1
    meter.CHECKSUM = register.CHECKSUM
    meter.VNOM = register.VNOM
    meter.LAST_RWDATA32 = register.LAST_RWDATA32
    meter.PHSTATUS = register.PHSTATUS
    meter.ANGLE0 = register.ANGLE0
    meter.ANGLE1 = register.ANGLE1
    meter.ANGLE2 = register.ANGLE2
    meter.PHNOLOAD = register.PHNOLOAD
    meter.LINECYC = register.LINECYC
    meter.ZXTOUT = register.ZXTOUT
    meter.CFMODE = register.CFMODE
    meter.CF1DEN = register.CF1DEN
    meter.CF2DEN = register.CF2DEN
    meter.CF3DEN = register.CF3DEN
    meter.CONFIG = register.CONFIG
    meter.MMODE = register.MMODE
    meter.ACCMODE = register.ACCMODE
    meter.LCYCMODE = register.LCYCMODE
    meter.PEAKCYC = register.PEAKCYC
    meter.SAGCYC = register.SAGCYC
    meter.CFCYC = register.CFCYC
    meter.HSDC_CFG = register.HSDC_CFG
    meter.Version = register.Version
    meter.CONFIG3 = register.CONFIG3
    meter.LAST_RWDATA8 = register.LAST_RWDATA8
    meter.APNOLOAD = register.APNOLOAD
    meter.VARNOLOAD = register.VARNOLOAD
    meter.VANOLOAD = register.VANOLOAD
    meter.LAST_ADD = register.LAST_ADD
    meter.LAST_RWDATA16 = register.LAST_RWDATA16
    meter.LAST_OP = register.LAST_OP
    meter.WTHR = register.WTHR
    meter.VARTHR = register.VARTHR
    meter.VATHR = register.VATHR
    meter.CONFIG2 = register.CONFIG2
    return meter;
  }

}
