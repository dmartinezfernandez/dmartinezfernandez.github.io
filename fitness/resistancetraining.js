"use strict";

(function () {
    angular.module('app', []);
}());

(function () {
    'use strict';

    class EssentialsService {
        constructor() {
            this.rmData = [
                { reps: 1, factor: 1.0 },
                { reps: 2, factor: 0.95 },
                { reps: 3, factor: 0.93 },
                { reps: 4, factor: 0.9 },
                { reps: 5, factor: 0.87 },
                { reps: 6, factor: 0.85 },
                { reps: 7, factor: 0.83 },
                { reps: 8, factor: 0.8 },
                { reps: 9, factor: 0.77 },
                { reps: 10, factor: 0.75 },
                { reps: 11, factor: 0.71 },
                { reps: 12, factor: 0.67 },
                //{ reps: 13, factor: 0.6633 },
                //{ reps: 14, factor: 0.6567 },
                { reps: 15, factor: 0.65 }
            ];
        }
        calc1RM(load, reps) {
            if (!(this._validateLoad(load) && this._validateReps(reps))) {
                return NaN;
            }
            return load / this.rmData.find(rm => rm.reps == reps).factor;
        }
        calcRMLoad(rm1) {
            if (!(this._validateLoad(rm1))) {
                return [];
            }
            return this.rmData.map((item) => {
                return {
                    factor: item.factor,
                    reps: item.reps,
                    load: item.factor * rm1
                }
            });
        }
        _validateReps(reps) {
            return this.rmData.find(rm => rm.reps == reps) !== undefined;
        }
        _validateLoad(load) {
            return load > 0.0;
        }
    }

    angular.module('app').service('EssentialsService', EssentialsService);
}());

(function () {
    'use strict';

    class DataService {
        constructor() {
            this.exercises = [];
            this.isLoaded = this.load();
        };
        load() {
            this.exercises.length = 0;
            let params = new URLSearchParams(window.location.search);
            let param1 = params.get("exercises");
            let param2 = params.get("1rm");
            let param3 = params.get("precision");

            if (param1 != null && param2 != null) {
                param1 = param1.split(",").map(item => item.trim());
                param2 = param2.split(",").map(item => item.trim()).map(Number);
                if (param1.length == param2.length && param1.length) {
                    for (let i = 0; i < param1.length; i++) {
                        this.exercises.push({
                            name: param1[i],
                            rm1: param2[i]
                        });
                    };
                }
            }

            this.precision = 1; // Default value.
            if (param3 != null && !isNaN(param3)) {
                let x = parseFloat(param3);
                if (x > 0.0) {
                    this.precision = x;
                }
            }

            return this.exercises.length > 0;
        };
    }

    angular.module('app').service('DataService', DataService);
}());

(function () {
    'use strict';

    class ResistanceTrainingController {
        constructor(EssentialsService, DataService) {
            this.data = DataService;
            this.essentials = EssentialsService;
            this.calculator = {
                load: null,
                reps: null,
                rm1: NaN,
                rm: []
            }
            this.query = {
                exercises: null,
                rm1: null,
                precision: null
            }

            this.query.exercises = DataService.exercises.map(e => e.name).join(", ");
            this.query.rm1 = DataService.exercises.map(e => e.rm1).join(", ");
            this.query.precision = DataService.precision.toString();
        }
        calculatorChange() {
            if (!isNaN(this.calculator.load) && !isNaN(this.calculator.reps)) {
                let parsedLoad = parseFloat(this.calculator.load);
                let parsedReps = parseInt(this.calculator.reps);
                this.calculator.rm1 = this.essentials.calc1RM(parsedLoad, parsedReps);

                this.calculator.rm.length = 0;
                let newRM = this.essentials.calcRMLoad(this.calculator.rm1);
                for (let i = 0; i < newRM.length; i++) {
                    this.calculator.rm.push({
                        factor: newRM[i].factor,
                        reps: newRM[i].reps,
                        load: Math.round(newRM[i].load)
                    });
                }
            }
            else {
                this.calculator.rm1 = NaN;
                this.calculator.rm.length = 0;
            }
        }
        calculatorHasValue() {
            return !isNaN(this.calculator.rm1);
        }
        background(factor) {
            if (factor > 0.85) {
                return {
                    'background-color': '#0043ce'
                };
            }
            else if (factor == 0.85) {
                return {
                    'background-image': 'linear-gradient(#0043ce, #6929c4)'
                };
            }
            else if (factor > 0.67) {
                return {
                    'background-color': '#6929c4'
                };
            }
            else if (factor == 0.67) {
                return {
                    'background-image': 'linear-gradient(#6929c4, #21272a)'
                };
            }
            else {
                return {
                    'background-color': '#21272a'
                }
            }
        }
        percent(factor) {
            return Math.round(factor * 100)
        }
        mround(load) {
            let x = Math.round(load / this.data.precision) * this.data.precision;
            // Avoid floating-point rounding error.
            let decimals = 0;
            if (!Number.isInteger(this.data.precision)) {
                decimals = (this.data.precision % 1).toString().length - 2;
            }
            x = parseFloat(x.toFixed(decimals));
            return x;
        }
        round(load) {
            if (this.data.precision >= 1.0) {
                return Math.round(load);
            }
            else {
                return this.mround(load);
            }
        }
        submit() {
            let url = window.location.origin + window.location.pathname + "?exercises=" + this.query.exercises + "&1rm=" + this.query.rm1 + "&precision=" + this.query.precision;
            window.location = url;
        }
    }
    ResistanceTrainingController.$inject = ['EssentialsService', 'DataService'];
    angular.module('app').controller('ResistanceTrainingController', ResistanceTrainingController);
}());