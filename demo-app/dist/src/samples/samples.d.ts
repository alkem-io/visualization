export declare const samples: {
    LifecycleVisualization: {
        "Innovation Flow": {
            json: {
                id: string;
                context: {
                    parentID: string;
                };
                initial: string;
                states: {
                    new: {
                        on: {
                            REFINE: string;
                            ABANDONED: string;
                        };
                    };
                    beingRefined: {
                        on: {
                            REVIEW: string;
                            ABANDONED: string;
                        };
                    };
                    awaitingApproval: {
                        on: {
                            APPROVED: string;
                            ABANDONED: string;
                        };
                    };
                    inProgress: {
                        entry: string[];
                        on: {
                            COMPLETED: string;
                            ABANDONED: string;
                        };
                    };
                    complete: {
                        on: {
                            ARCHIVE: string;
                            ABANDONED: string;
                        };
                    };
                    abandoned: {
                        on: {
                            REOPEN: string;
                            ARCHIVE: string;
                        };
                    };
                    archived: {
                        type: string;
                    };
                };
            };
            url: string;
        };
        "Organization Verification": {
            json: {
                id: string;
                context: {
                    parentID: string;
                };
                initial: string;
                states: {
                    notVerified: {
                        on: {
                            VERIFICATION_REQUEST: {
                                target: string;
                                cond: string;
                            };
                        };
                    };
                    verificationPending: {
                        on: {
                            MANUALLY_VERIFY: {
                                target: string;
                                cond: string;
                            };
                            REJECT: string;
                        };
                    };
                    manuallyVerified: {
                        entry: string[];
                        on: {
                            RESET: {
                                target: string;
                                cond: string;
                            };
                        };
                    };
                    rejected: {
                        on: {
                            REOPEN: string;
                            ARCHIVE: string;
                        };
                    };
                    archived: {
                        type: string;
                    };
                };
            };
            url: string;
        };
        "User Application": {
            json: {
                id: string;
                context: {
                    parentID: string;
                };
                initial: string;
                states: {
                    new: {
                        on: {
                            APPROVE: {
                                target: string;
                                cond: string;
                            };
                            REJECT: string;
                        };
                    };
                    approved: {
                        type: string;
                        entry: string[];
                    };
                    rejected: {
                        on: {
                            REOPEN: string;
                            ARCHIVE: string;
                        };
                    };
                    archived: {
                        type: string;
                    };
                };
            };
            url: string;
        };
    };
};
