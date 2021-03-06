const path = require('path');
const nock = require('nock');
const { ComponentRegistration, MessageFactory } = require('botbuilder-core');
const { ResourceExplorer } = require('botbuilder-dialogs-declarative');
const { AdaptiveTestComponentRegistration, TestUtils } = require('../lib');
const { AdaptiveComponentRegistration } = require('botbuilder-dialogs-adaptive');

describe('ActionTests', function () {
    this.timeout(10000);

    ComponentRegistration.add(new AdaptiveComponentRegistration());
    ComponentRegistration.add(new AdaptiveTestComponentRegistration());

    const resourceExplorer = new ResourceExplorer().addFolder(
        path.join(__dirname, 'resources/ActionTests'),
        true,
        false
    );

    it('AttachmentInput', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_AttachmentInput');
    });

    it('BeginDialog', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_BeginDialog');
    });

    it('BeginDialogWithActivity', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_BeginDialogWithActivity');
    });

    it('CancelAllDialogs', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_CancelAllDialogs');
    });

    it('CancelAllDialogs_DoubleCancel', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_CancelAllDialogs_DoubleCancel');
    });

    it('CancelDialog', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_CancelDialog');
    });

    it('CancelDialogs_Processed', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_CancelDialog_Processed');
    });

    it('ChoiceInput', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_ChoiceInput');
    });

    it('ChoiceInputWithLocale', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_ChoiceInput_WithLocale');
    });

    it('ChoicesInMemory', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_ChoicesInMemory');
    });

    it('ChoiceStringInMemory', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_ChoiceStringInMemory');
    });

    it('ConfirmInput', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_ConfirmInput');
    });

    it('DeleteActivity', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_DeleteActivity');
    });

    it('DatetimeInput', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_DatetimeInput');
    });

    it('DeleteProperties', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_DeleteProperties');
    });

    it('DeleteProperty', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_DeleteProperty');
    });

    it('DoActions', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_DoActions');
    });

    it('DynamicBeginDialog', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_DynamicBeginDialog');
    });

    it('EditActionAppendActions', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_EditActionAppendActions');
    });

    it('EditActionInsertActions', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_EditActionInsertActions');
    });

    it('EditActionReplaceSequence', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_EditActionReplaceSequence');
    });

    it('EmitEvent', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_EmitEvent');
    });

    it('EndDialog', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_EndDialog');
    });

    it('Foreach_Nested', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_Foreach_Nested');
    });

    it('Foreach', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_Foreach');
    });

    it('Foreach_Empty', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_Foreach_Empty');
    });

    it('ForeachPage_Empty', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_ForeachPage_Empty');
    });

    it('ForeachPage_Nested', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_ForeachPage_Nested');
    });

    it('ForeachPage_Partial', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_ForeachPage_Partial');
    });

    it('ForeachPage', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_ForeachPage');
    });

    it('GetActivityMembers', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_GetActivityMembers');
    });

    it('GetConversationMembers', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_GetConversationMembers');
    });

    it('GotoAction', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_GotoAction');
    });

    it('HttpRequest', async () => {
        nock('http://foo.com').post('/', 'Joe is 52').reply(200, 'string');
        nock('http://foo.com').post('/', { text: 'Joe is 52', age: 52 }).reply(200, 'object');
        nock('http://foo.com')
            .post('/', [
                { text: 'Joe is 52', age: 52 },
                { text: 'text', age: 11 },
            ])
            .reply(200, 'array');
        nock('http://foo.com').get('/image').reply(200, 'TestImage');
        nock('http://foo.com').get('/json').reply(200, { test: 'test' });
        nock('http://foo.com').get('/activity').reply(200, MessageFactory.text('testtest'));
        nock('http://foo.com')
            .get('/activities')
            .reply(200, [MessageFactory.text('test1'), MessageFactory.text('test2'), MessageFactory.text('test3')]);
        await TestUtils.runTestScript(resourceExplorer, 'Action_HttpRequest');
    });

    it('IfCondition', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_IfCondition');
    });

    it('InputDialog_ActivityProcessed', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'InputDialog_ActivityProcessed');
    });

    it('NumerInput', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_NumberInput');
    });

    it('NumerInputWithDefaultValue', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_NumberInputWithDefaultValue');
    });

    it('NumberInputWithValueExpression', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_NumberInputWithValueExpression');
    });

    it('RepeatDialog', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_RepeatDialog');
    });

    it('RepeatDialogLoop', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_RepeatDialogLoop');
    });

    it('ReplaceDialog', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_ReplaceDialog');
    });

    it('SendActivity', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_SendActivity');
    });

    it('SetProperties', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_SetProperties');
    });

    it('SetProperty', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_SetProperty');
    });

    it('SignOutUser', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_SignOutUser');
    });

    it('Switch_Bool', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_Switch_Bool');
    });

    it('Switch_Default', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_Switch_Default');
    });

    it('Switch_Number', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_Switch_Number');
    });

    it('Switch', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_Switch');
    });

    it('TextInput', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_TextInput');
    });

    it('TextInputWithInvalidPrompt', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_TextInputWithInvalidPrompt');
    });

    it('TextInputWithValueExpression', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_TextInputWithValueExpression');
    });

    it('TraceActivity', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_TraceActivity');
    });

    it('UpdateActivity', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_UpdateActivity');
    });

    it('WaitForInput', async () => {
        await TestUtils.runTestScript(resourceExplorer, 'Action_WaitForInput');
    });
});
