const { createApp, computed, ref } = Vue;

createApp({
  setup() {
    const steps = ref([
      {
        id: 1,
        title: 'Basics',
        description:
          'Basics description'
      },
      {
        id: 2,
        title: 'Components',
        description:
          'Components description'
      },
      {
        id: 3,
        title: 'Router',
        description:
          'Router description'
      },
      {
        id: 4,
        title: 'Vuex',
        description:
          'Vuex description'
      },
      {
        id: 5,
        title: 'Composition',
        description:
          'Composition API description.'
      }
    ]);

    const activeStep = ref(0);
    const currentStep = computed(() => steps.value[activeStep.value]);
    const isFirstStep = computed(() => activeStep.value === 0);
    const isLastStep = computed(() => activeStep.value === steps.value.length - 1);

    function goToStep(index) {
      if (index < 0 || index >= steps.value.length) return;
      activeStep.value = index;
    }

    function nextStep() {
      if (!isLastStep.value) {
        activeStep.value++;
      }
    }

    function prevStep() {
      if (!isFirstStep.value) {
        activeStep.value--;
      }
    }

    function stepClass(index) {
      return {
        completed: index < activeStep.value,
        active: index === activeStep.value
      };
    }

    return {
      steps,
      activeStep,
      currentStep,
      isFirstStep,
      isLastStep,
      goToStep,
      nextStep,
      prevStep,
      stepClass
    };
  }
}).mount('#app');
