import { ReactElement, useCallback, useState } from "react";

/**
 * -------------------------------------------------
 *  Hook para el manejo de formularios multistep
 * -------------------------------------------------
 * @param {Array} [steps] Arreglo de componentes de React, cada componente es un paso dentro del formulario
 * @returns {Object} Objeto para controlar el estado actual del formulario
 * @property {number} currentStep: Retorna el indice del componente o paso actual
 * @property {ReactElement} step: Retorna el componente correspondiente al paso actual
 * @property {function} next: Selecciona el siguiente paso
 * @property {function} back: Selecciona el paso anterior
 * @property {Array} steps: regresa el arreglo de componentes del formulario
 * @property {function} goTo: Selecciona un paso en especifico
 *
 *
 */
export function useMultiFormHook(steps: ReactElement[]) {
  const [currentStep, setCurrentStep] = useState(0);

  // Funcion siguiente
  const next = () => {
    setCurrentStep((i: number) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  };

  // Funcion atras
  const back = () => {
    setCurrentStep((i: number) => {
      if (i === 0) return i;
      return i - 1;
    });
  };

  const goTo = useCallback((index: number) => {
    setCurrentStep(index);
  }, []);

  return {
    currentStep,
    step: steps[currentStep],
    next,
    back,
    steps,
    goTo,
  };
}
