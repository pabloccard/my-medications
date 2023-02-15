import { useState, FormEvent } from 'react'

export function useForm(steps: Array<JSX.Element>) {
  const [currentStep, setCurrentStep] = useState(0)

  function changeStep(i: number, e: FormEvent<HTMLFormElement>) {
    if (e) e.preventDefault()

    if (i < 0 || i >= steps.length) return

    setCurrentStep(i)
  }

  return {
    currentStep,
    currentComponent: steps[currentStep],
    changeStep,
    isLastStep: currentStep + 1 === steps.length,
  }
}
