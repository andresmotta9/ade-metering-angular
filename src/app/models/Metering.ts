import { Meter } from "./Meter";
import { Phase } from "./Phase";
export class Metering {
  public meter: Meter
  public phaseA: Phase
  public phaseB: Phase
  public phaseC: Phase
  public phaseN: Phase
  constructor() {
    this.phaseA = new Phase();
    this.phaseB = new Phase();
    this.phaseC = new Phase();
    this.phaseN = new Phase();
    this.meter = new Meter();
  }
}