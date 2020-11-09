import React, { useState } from 'react';
import AppLayout from '../../layout';
import './CreateCharacter.css';
import {
    Form, Select, Input, Button,
} from 'antd';
import { RoleType } from '../../definitions';
import { CharacterBuilder } from '../../infrastructure/character-builder/builder';
import { parseRoleTypeStrToEnum } from '../../utils';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'redux-react-hook';
import { GameActionType } from '../../redux/definition';

const { Option } = Select;
const formLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
};
const formItemLayoutWithOutLabel = {
    wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
    },
};
const CreateCharacter = () => {
    const [character, setCharacter] = useState();
    const [selectType, setSelectType] = useState('');
    const [form] = Form.useForm();
    const history = useHistory();
    const dispatch = useDispatch();
    const roleTypes = Object.values(RoleType);

    const onCreateCharacter = (character, name) => {
        character.Status.Name = name;
        dispatch({ type: GameActionType.SET_CHARACTER, character: character });
    }

    const handleSubmit = async () => {
        const fieldsValue = await form.validateFields();
        onCreateCharacter(character, fieldsValue.name);
        history.push('/map');
    }
    const onSelectRoleType = (value) => {
        setSelectType(value);
        const type = parseRoleTypeStrToEnum(value);
        buildCharacter(type);
    }
    const buildCharacter = (type) => {
        const newCharacter = CharacterBuilder.build('', type);
        if (newCharacter) {
            setCharacter(newCharacter);
        }
    }
    const onClickRebuild = () => {
        const type = parseRoleTypeStrToEnum(selectType);
        buildCharacter(type);
    }
    return (
        <AppLayout>
            <div className="form-container">
                <h1 className="text-center">请先创建你的英雄</h1>
                <Form form={form} {...formLayout}>
                    <Form.Item
                        name="name"
                        label="大名"
                        rules={
                            [{ required: true, message: '请输入英雄大名' }]
                        }
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="职业"
                        name="type"
                        rules={[
                            { required: true, message: '请选择职业' },
                        ]}
                    >
                        <Select onChange={onSelectRoleType} placeholder="请选择职业">
                            {roleTypes.map(type => {
                                return <Option key={type} value={type}>{type}</Option>
                            })}
                        </Select>
                    </Form.Item>
                    {
                        character &&
                        <>
                            <Form.Item
                                label="生命值"
                            >
                                <span className="ant-form-text">{character.Status.HP}</span>
                            </Form.Item>
                            <Form.Item
                                label="魔力值"
                            >
                                <span className="ant-form-text">{character.Status.MP}</span>
                            </Form.Item>
                            <Form.Item
                                label="攻击力"
                            >
                                <span className="ant-form-text">{character.Status.Attack}</span>
                            </Form.Item>
                            <Form.Item
                                label="防御力"
                            >
                                <span className="ant-form-text">{character.Status.Defend}</span>
                            </Form.Item>
                            <Form.Item {...formItemLayoutWithOutLabel}>
                                <Button type="primary" onClick={onClickRebuild}>什么辣鸡属性！</Button>
                                <Button type="primary" onClick={handleSubmit} style={{ marginLeft: 50 }}>就决定是你了！</Button>
                            </Form.Item>
                        </>
                    }
                </Form>
            </div>
        </AppLayout>
    )
}

export default CreateCharacter;
