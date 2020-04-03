/*Test action*/
export const testAction = (data) => ({
    type: "TEST_ACTION",
    data,
});

export const testActionSuccess = (data) => ({
    type: "TEST_ACTION_SUCCESS",
    data
});

export const testActionFailure = (error) => ({
    type: "TEST_ACTION_FAILURE",
    error
});
/*Test action*/
