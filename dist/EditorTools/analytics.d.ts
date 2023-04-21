import { Node as PMNode } from "@tiptap/pm/model";
import { Step, StepResult, StepMap, ReplaceStep, Mappable } from "@tiptap/pm/transform";
import { Transaction } from "@tiptap/pm/state";
export declare const analyticsStepType = "magic-editor-analytics";
export interface AnalyticsPayload {
    subject: string;
    action: string;
    attrs?: Record<string, unknown>;
}
export declare class AnalyticsStep extends Step {
    payloads: AnalyticsPayload[];
    pos?: number;
    constructor(payloads: AnalyticsPayload[], pos?: number);
    invert(): AnalyticsStep;
    apply(doc: PMNode): StepResult;
    map(mapping: Mappable): AnalyticsStep;
    getMap(): StepMap;
    merge(other: Step): AnalyticsStep | null;
    toJSON(): {
        stepType: string;
    };
    static fromJSON(): ReplaceStep;
}
export declare function getAnalyticsFromTransaction(tr: Transaction): AnalyticsPayload[];
export declare function addAnalytics(tr: Transaction, payload: AnalyticsPayload): Transaction;
