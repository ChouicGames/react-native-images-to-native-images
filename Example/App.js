"use strict";
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_native_1 = require("react-native");
const NewAppScreen_1 = require("react-native/Libraries/NewAppScreen");
const Section = ({ children, title }) => {
    const isDarkMode = (0, react_native_1.useColorScheme)() === 'dark';
    return (react_1.default.createElement(react_native_1.View, { style: styles.sectionContainer },
        react_1.default.createElement(react_native_1.Text, { style: [
                styles.sectionTitle,
                {
                    color: isDarkMode ? NewAppScreen_1.Colors.white : NewAppScreen_1.Colors.black,
                },
            ] }, title),
        react_1.default.createElement(react_native_1.Text, { style: [
                styles.sectionDescription,
                {
                    color: isDarkMode ? NewAppScreen_1.Colors.light : NewAppScreen_1.Colors.dark,
                },
            ] }, children)));
};
const App = () => {
    const isDarkMode = (0, react_native_1.useColorScheme)() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? NewAppScreen_1.Colors.darker : NewAppScreen_1.Colors.lighter,
    };
    return (react_1.default.createElement(react_native_1.SafeAreaView, { style: backgroundStyle },
        react_1.default.createElement(react_native_1.StatusBar, { barStyle: isDarkMode ? 'light-content' : 'dark-content' }),
        react_1.default.createElement(react_native_1.ScrollView, { contentInsetAdjustmentBehavior: "automatic", style: backgroundStyle },
            react_1.default.createElement(NewAppScreen_1.Header, null),
            react_1.default.createElement(react_native_1.View, { style: {
                    backgroundColor: isDarkMode ? NewAppScreen_1.Colors.black : NewAppScreen_1.Colors.white,
                } },
                react_1.default.createElement(Section, { title: "Step One" },
                    "Edit ",
                    react_1.default.createElement(react_native_1.Text, { style: styles.highlight }, "App.tsx"),
                    " to change this screen and then come back to see your edits."),
                react_1.default.createElement(Section, { title: "See Your Changes" },
                    react_1.default.createElement(NewAppScreen_1.ReloadInstructions, null)),
                react_1.default.createElement(Section, { title: "Debug" },
                    react_1.default.createElement(NewAppScreen_1.DebugInstructions, null)),
                react_1.default.createElement(Section, { title: "Learn More" }, "Read the docs to discover what to do next:"),
                react_1.default.createElement(NewAppScreen_1.LearnMoreLinks, null)))));
};
const styles = react_native_1.StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});
exports.default = App;
