export interface WorkflowStep {
    icon: string;
    labelKey: string;
    descKey: string;
}

export const workflowSteps: WorkflowStep[] = [
    {
        icon: "mdi:file-document-outline",
        labelKey: "workflow.step1.title",
        descKey: "workflow.step1.desc",
    },
    {
        icon: "mdi:chart-timeline-variant",
        labelKey: "workflow.step2.title",
        descKey: "workflow.step2.desc",
    },
    {
        icon: "mdi:palette-outline",
        labelKey: "workflow.step3.title",
        descKey: "workflow.step3.desc",
    },
    {
        icon: "mdi:account-check-outline",
        labelKey: "workflow.step4.title",
        descKey: "workflow.step4.desc",
    },
    {
        icon: "mdi:rocket-launch-outline",
        labelKey: "workflow.step5.title",
        descKey: "workflow.step5.desc",
    },
];
