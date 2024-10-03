import AppContainer from "./components/layout/AppContainer";
import AppSection from "./components/layout/AppSection";
import Overline from "./components/typography/Overline";
import Button1 from "./components/ui/Button1";
import Button2 from "./components/ui/Button2";
import Button3 from "./components/ui/Button3";

export default function Home() {
  return (
    <AppContainer>
      <AppSection>
        <Overline>Test</Overline>
        <p>Lorem ipsum dolor sit amet.</p>
        <Button1>Button 1</Button1>
        <Button2>Button 2</Button2>
        <Button3>Button 3</Button3>
      </AppSection>
    </AppContainer>
  );
}
