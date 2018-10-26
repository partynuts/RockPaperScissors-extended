import React from "react";
import { modes } from "../../const";

const initialState = {
    pl1_name: undefined,
    pl2_name: undefined,
    error: undefined
};

export default class NameAndOpponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    setPl1Name(pl1_name) {
        this.setState({ pl1_name })
    }

    setPl2Name(pl2_name) {
        this.setState({ pl2_name })
    }

    error() {
        switch (this.props.mode) {
            case modes.PC_PC:
                if (!this.state.pl1_name) {
                    return "Please select player 1.";
                } else if (!this.state.pl2_name) {
                    return "Please select player 2!"
                }
                break;
            case modes.HUMAN_PC:
                if (!this.state.pl1_name) {
                    return "Please insert your name!"
                } else if (!this.state.pl2_name) {
                    return "Please select player 2!"
                }
                break;
            case modes.HUMAN_HUMAN:
                if (!this.state.pl1_name) {
                    return "Please insert your name!"
                }
        }
    }

    onSubmit() {
        const error = this.error();
        if (error) {
            this.setState({ error })
        } else {
            this.props.onSubmit(this.state.pl1_name, this.state.pl2_name)
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.mode !== this.props.mode) {
            this.setState(initialState);
        }
    }

    render() {
        switch (this.props.mode) {
            case modes.PC_PC:
                return (
                    <div className="playerSelectionBox">
                        <h3 className="err" hidden={!this.state.error}>{this.state.error}</h3>
                        <div className="playerBtnBox">
                            <p className="plSelectionLabel">Select player 1.</p>
                            <button className="playerBtn" onClick={() => this.setPl1Name("R2D2")}>R2D2</button>
                            <button className="playerBtn" onClick={() => this.setPl1Name("C3PO")}>C3PO</button>
                            <button className="playerBtn" onClick={() => this.setPl1Name("No.5")}>No.5</button>
                        </div>
                        <div className="playerBtnBox">
                            <p className="plSelectionLabel">Select player 2.</p>
                            <button className="playerBtn" onClick={() => this.setPl2Name("R2D2")}>R2D2</button>
                            <button className="playerBtn" onClick={() => this.setPl2Name("C3PO")}>C3PO</button>
                            <button className="playerBtn" onClick={() => this.setPl2Name("No.5")}>No.5</button>
                        </div>
                        <button className="submitBtn" onClick={() => this.onSubmit()}>Done!</button>
                    </div>
                );
            case modes.HUMAN_PC:
                return (
                    <div className="playerSelectionBox">
                        <h3 className="err" hidden={!this.state.error}>{this.state.error}</h3>

                        <div className="playerInputBox">
                            <p className="plSelectionLabel">Type in your name.</p>
                            <input type="text" required autoFocus onChange={e => this.setPl1Name(e.target.value)} />
                        </div>
                        <div className="playerBtnBox">
                            <p className="plSelectionLabel">Select an opponent.</p>
                            <button className="playerBtn" onClick={() => this.setPl2Name("R2D2")}>R2D2</button>
                            <button className="playerBtn" onClick={() => this.setPl2Name("C3PO")}>C3PO</button>
                            <button className="playerBtn" onClick={() => this.setPl2Name("No.5")}>No.5</button>
                        </div>
                        <button className="submitBtn" onClick={() => this.onSubmit()}>Done!</button>
                    </div>
                );
            case modes.HUMAN_HUMAN:
                return (
                    <div className="playerSelectionBox">
                        <h3 className="err" hidden={!this.state.error}>{this.state.error}</h3>

                        <div className="playerInputBox">
                            <p className="plSelectionLabel">Type in your name.</p>
                            <input type="text" required autoFocus onChange={e => this.setPl1Name(e.target.value)} />
                        </div>
                        <button className="submitBtn" onClick={() => this.onSubmit()}>Done!</button>
                    </div>
                );
            default:
                return (
                    <div></div>
                )
        }


    }

} 